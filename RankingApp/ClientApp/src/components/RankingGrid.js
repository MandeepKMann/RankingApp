


const RankingGrid = ({ items, FamousRaccoonImageArray }) => {

    const rankingGrid = [];
    const cellCollectionS = [];
    const cellCollectionA = [];
    const cellCollectionB = [];
    const cellCollectionC = [];
    const cellCollectionD = [];

    const createCellsForRows = () => {



    }

    const createRowsForGrid = () => {
        //pushes rows of ranked tiers into rankingGrid array
        rankingGrid.push(<div className="rank-row-s-tier">{cellCollectionS}</div>)
        rankingGrid.push(<div className="rank-row-a-tier">{cellCollectionA}</div>)
        rankingGrid.push(<div className="rank-row-b-tier">{cellCollectionB}</div>)
        rankingGrid.push(<div className="rank-row-c-tier">{cellCollectionC}</div>)
        rankingGrid.push(<div className="rank-row-d-tier">{cellCollectionD}</div>)

        return rankingGrid
    }

    const createRankingGrid = () => {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (

        <div classname="rankings">
            {createRankingGrid()}
        </div>

    )
}

export default RankingGrid;