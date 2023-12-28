import * as DC from './style/DonateComponent.style';
import OrderDropDown from './DonateOrderDropDown';
import { Suspense, useState } from 'react';
import SearchBar from './SearchBar';
import DonateComponentInner from './DonateComponentInner';

function DonateComponent() {
    const [order, setOrder] = useState<string | undefined>();
    const [searchQuery, setSearchQuery] = useState<string | undefined>();

    return (
        <DC.Wrapper>
            <DC.Nav>
                <OrderDropDown setOrder={setOrder} />
                <SearchBar setSearchQuery={setSearchQuery} />
            </DC.Nav>
            <Suspense fallback={<div>loading...</div>}>
                <DonateComponentInner order={order} searchQuery={searchQuery} />
            </Suspense>
        </DC.Wrapper>
    );
}

export default DonateComponent;
