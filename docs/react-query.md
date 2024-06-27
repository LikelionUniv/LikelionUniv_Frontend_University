## react query 설명

-   react query를 사용하는 이유는 isLoading, error 등등 여러 가지 편의성 기능의 제공도 있지만 가장 큰 이유는 캐싱 기능입니다.
-   같은 정보를 여러 번 불러와 서버를 부하시키는 일을 벌리지 않기 위해서이며, 이 때문에 react-query를 활용한다고 알고 있으면 되겠습니다.

### 초기 셋팅

```tsx
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
        },
    },
});

<QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
</QueryClientProvider>;
```

-   queryClient를 생성한 후 디폴트 옵션으로 두 가지를 설정해줬는데 focus를 할 경우 (크롬 창 왔다갔다, f12 등) refetch 방지와 staleTime 두 가지입니다.

staleTime은 캐싱한 데이터가 유효한 시간을 말하는데, 캐싱한 데이터가 staleTime이 지나지 않았다면, fresh한 상태인 캐싱데이터이므로 굳이 서버로부터 데이터를 다시 가져오지 않아도 된다는 의미입니다.

## react-query 사용법

### get

http method에서 get은 `useQuery`훅을 사용합니다.
useQuery 훅은 기본적으로 2개의 파라미터를 필요로합니다.

1. queryKey

-   리코일과 동일하게 중복되지 않은 고유한 키 값을 넣어줘야합니다.
-   여기에는 파리미터의 변동 또한 반영시켜 주어야하는데 queryKey의 type은 `string[]`임을 확인할 수 있습니다.
-   따라서 변동되는 조건들을 배열로 넣어주면 각 파라미터 별로 고유한 키를 만들 수 있게 됩니다.

```tsx
const { data } = useSuspenseQuery({
    queryKey: ['donation-detail', donationHistoryId],
    queryFn: fetchDonateDetail,
});
```

2. queryFn

-   실행할 비동기함수
-   말 그대로 서버에서 값을 가져오는 함수입니다.
-   여기에서 utils에 있는 request 함수를 사용하면 됩니다.

3. 부가적으로...

-   select가 있는데 이는 서버에서 가져온 값을 잘라서 쓴다거나, 정렬을 한다거나하는 데이터를 가공하는 목적으로 사용할 수 있습니다.
-   이거는 필요할 때 적절하게 사용하면 좋을 것 같습니다.

```tsx
const { data, refetch } = useQuery({
    queryKey: ['search-user', keyword],
    queryFn: searchUser,
    select: data => data.sort(sortByPartAndName),
});
```

-   특수한 상황

검색의 경우 이미 get을 요청한 이후 다시 get 메서드로 요청해야합니다.
이럴 때는 useQuery의 refetch 메서드를 사용합니다.
refetch 메서드를 사용하면 get 메서드를 다시 실행할 수 있으며, refetch 메서드가 실행됐을 때만 다시 불러오게하기 위해서는 enabled: false를 옵션으로 넣어줘야합니다.

```tsx
const { data, refetch } = useQuery({
    queryKey: ['search-user', keyword],
    queryFn: searchUser,
    select: data => data.sort(sortByPartAndName),
    enabled: false,
});
```

### useSuspenseQuery

-   성공한 결과만을 전달해줘서 반환이 undefined일 때를 생각하지 않아도 된다는 장점이 있습니다.
-   이 훅을 사용하려면 Promise가 발생하는 부모의 컴포넌트에서 Suspense로 반드시 묶어줘야합니다.
-   아마 useQuery보다 useSuspenseQuery를 더 많이 사용하게 되지 않을까 싶습니다.

Suspense는 자식 컴포넌트에서 프로미스를 감지하여 loading 상태일 동안 fallback props로 넘겨준 loading 화면을 보여준 뒤 완료되면 자식 컴포넌트의 결과를 보여줍니다.

isLoading을 사용할 필요가 없다는 장점이 있습니다.

```tsx
<Suspense fallback={<BoxSkeleton pageSize={pageSize} />}>
    <ProjectListInner projectApi={projectApi} pageSize={pageSize} />
</Suspense>
```

### post, put, delete, patch

http method에서 get 이외의 메서드는 `useMutation`훅을 사용합니다.
useMutation 훅은 기본적으로 2개의 파라미터를 필요로하며, 추가로 몇 가지를 더 알아야합니다.

1. mutationKey

-   useQuery의 키와 동일합니다.

2. mutationFn

-   실행할 비동기함수
-   말 그대로 서버에 값을 전달하여 서버의 데이터에 변동을 일으키는 함수입니다.
-   여기에서 utils에 있는 request 함수를 사용하면 됩니다.

3. onSuccess

-   요청이 성공했을 때 작동하는 함수
-   예시에서는 patch 메서드를 사용했으며, 수정이 성공하면 수정된 데이터로 서버에서 다시 불러와야합니다.
-   이 때 queryClient의 invalidateQueries를 사용하면 해당 키에 대한 정보가 stale 처리되어 유효하지 않은 데이터로 간주하기 때문에 서버에서 다시 불러오게 됩니다.

예시: 프로젝트 수정의 경우 프로젝트 목록과 프로젝트 디테일의 캐시를 stale 처리하여 해당 정보를 다시 불러오도록 명령

```tsx
onSuccess: data => {
    queryClient.invalidateQueries({
        queryKey: ['get-pagiable', { uri: '/api/v1/projects/' }],
    });
    queryClient.invalidateQueries({
        queryKey: ['project-detail', projectId],
    });

    alert(`${data}번의 게시글이 수정되었습니다.`);
    clearUser();
    navigate('/project');
},
```

4. onError

-   요청이 실패했을 때 작동하는 함수
-   요청이 실패했을 때 상태를 원복시키는 작업을 수행할 수 있습니다.

## react-query 함수 저장

@query 디렉토리 안에 각 http method별 디렉토리 안에 모아서 사용하시면 됩니다.
