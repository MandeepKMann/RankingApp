import { useState } from 'react';
import RankItems from './RankItems.js';

const RankItemsContainer = ({ dataType, imgArr }) => {
    const localLocalStorageKey = "local";
    const famousLocalStorageKey = "famous";

    let localStorageKey = "";

    const [localItems, setLocalItems] = useState(JSON.parse(localStorage.getItem(localLocalStorageKey)));
    const [famousItems, setFamousItems] = useState(JSON.parse(localStorage.getItem(famousLocalStorageKey)));

    let data = [];
    let setFunc = null;

    if (dataType === 1) {
        data = famousItems;
        setFunc = setFamousItems;
        localStorageKey = famousLocalStorageKey;
    }
    else if (dataType === 2) {
        data = localItems;
        setFunc = setLocalItems;
        localStorageKey = localLocalStorageKey;
    }

    return (
        <RankItems
            items={data}
            setItems={setFunc}
            dataType={dataType}
            imgArr={imgArr}
            localStorageKey={localStorageKey}
        />
    )

}

export default RankItemsContainer;
