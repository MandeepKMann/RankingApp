import React, { useState, useEffect } from 'react';
import FamousRaccoonImageArray from './FamousRaccoonImages.js';
import RankingGrid from './RankingGrid.js';

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((res) => {
                return res.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <main>

            <RankingGrid items={items} FamousRaccoonImageArray={FamousRaccoonImageArray} />

            <div className = "itemsNotRanked">
                {
                    (items.length > 0) ? items.map((item) =>
                        <div className="unrankedCell">
                            <img id={ `item-${item.id}` } src={ FamousRaccoonImageArray.find(o=>o.id === item.imageId)?.image } />
                        </div>

                    ) : <div>Loading...</div>
                }
            </div>
        </main>
    )
}

export default RankItems;