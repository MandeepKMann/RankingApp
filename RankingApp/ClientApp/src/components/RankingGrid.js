


const RankingGrid = ({ items, FamousRaccoonImageArray, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionS = [];
    const cellCollectionA = [];
    const cellCollectionB = [];
    const cellCollectionC = [];
    const cellCollectionD = [];

    const pushCellMarkupToArr = (cellCollection, rankNum, rowLabel) => {
        if (rankNum > 0) {
            //for ranking purposes (has an id which equals the ranking value)
            let item = items.find(o => o.ranking === rankNum);
            cellCollection.push(
            <div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rankCell">
                {(item != null) ? <img id={`item-${item.id}`} src={FamousRaccoonImageArray.find(o => o.id === item.imageId)?.image} draggable = "true" onDragStart={drag} /> 
                                : null}
            </div>);
        }
        else {
            //first cell is for labeling purposes
            cellCollection.push(<div className="rowLabel">
                <h4>{rowLabel}</h4>
            </div>);

        }
    }

    //creates 5 cells for each row in the ranking grid
    const createCellsForRow = (rowNum) => {
        let rankNum = 0;
        let currCollection = [];
        let label = "";
        const numCells = 5;

        for (let i = 1; i <= numCells; i++) {
            rankNum = (i === 1) ? 0 : (numCells * (rowNum - 1)) + i - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionS;
                label = "S Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionA;
                label = "A Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionB;
                label = "B Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionC;
                label = "C Tier";
            }
            else if (rowNum === 5) {
                currCollection = cellCollectionD;
                label = "D Tier";
            }

            pushCellMarkupToArr(currCollection, rankNum, label);

        }
    }

    //creates cells for the rows in the ranking grid
    const createCellsForRows = () => {
        const maxRows = 5;
        for (let row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }

    }

    //pushes rows of ranked tiers into rankingGrid array
    const createRowsForGrid = () => {
        rankingGrid.push(<div className="rankRow sTier">{cellCollectionS}</div>)
        rankingGrid.push(<div className="rankRow aTier">{cellCollectionA}</div>)
        rankingGrid.push(<div className="rankRow bTier">{cellCollectionB}</div>)
        rankingGrid.push(<div className="rankRow cTier">{cellCollectionC}</div>)
        rankingGrid.push(<div className="rankRow dTier">{cellCollectionD}</div>)

        return rankingGrid
    }

    const createRankingGrid = () => {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (

        <div className="rankings">
            {createRankingGrid()}
        </div>

    )
}

export default RankingGrid;