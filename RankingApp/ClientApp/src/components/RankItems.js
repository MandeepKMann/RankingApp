import React, { useState, useEffect } from 'react';
import FamousRaccoonImageArray from './FamousRaccoonImages.js';
import RankingGrid from './RankingGrid.js';

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    //stores the id value of the item that is being dragged
    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    //prevent default event
    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        //targetElm is the element in the ranking grid which the use chooses to drop the item
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            //if an image element already exists as a child element where the user it attempting to drop the image, it will return false
            return false;
        }
        //allows the drop function to only execute if the target element does not have any child elements
        if (targetElm.childNodes.length === 0) {
            let data = parseInt(ev.dataTransfer.getData("text").substring(5));
            //changes the ranking item of the selected item
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElm.id.substring(5)) } : { ...item, ranking: item.ranking });
            //sets the state of the items array and rerenders the component
            setItems(transformedCollection);
        }
    }
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

                <RankingGrid
                    items={items}
                    FamousRaccoonImageArray={FamousRaccoonImageArray}
                    drag={drag}
                    allowDrop={allowDrop}
                    drop={drop}
                />

                <div className="itemsNotRanked">
                    {
                        (items.length > 0) ? items.map((item) =>
                            <div key={item.id} className="unrankedCell">
                                <img
                                    id={`item-${item.id}`}
                                    src={FamousRaccoonImageArray.find(o => o.id === item.imageId)?.image}
                                    style={{ cursor: "pointer" }}
                                    draggable="true"
                                    onDragStart={drag}
                                />

                            </div>

                        ) : <div>Loading...</div>
                    }
                </div>
            </main>
        )
}

export default RankItems;