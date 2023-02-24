using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, Title = "#DeadRaccoonTO", ImageId=1, Ranking=0,ItemType=1 },
            new ItemModel{Id =2, Title = "Howard Lotor", ImageId=2, Ranking=0,ItemType=1 },
            new ItemModel{Id =3, Title = "Jackson the Raccoon", ImageId=3, Ranking=0,ItemType=1 },
            new ItemModel{Id =4, Title = "Meeko", ImageId=4, Ranking=0,ItemType=1 },
            new ItemModel{Id =5, Title = "Mr.Porter", ImageId=5, Ranking=0,ItemType=1 },
            new ItemModel{Id =6, Title = "Raccacoonie", ImageId=6, Ranking=0,ItemType=1 },
            new ItemModel{Id =7, Title = "RJ", ImageId=7, Ranking=0,ItemType=1 },
            new ItemModel{Id =8, Title = "Rocket Raccoon", ImageId=8, Ranking=0,ItemType=1 },
            new ItemModel{Id =9, Title = "Sly Cooper", ImageId=9, Ranking=0,ItemType=1 },
            new ItemModel{Id =10, Title = "Tom Nook", ImageId=10, Ranking=0,ItemType=1 },
            new ItemModel{Id = 11, Title = "Abbey Road", ImageId=11, Ranking=0,ItemType=2 },
            new ItemModel{Id = 12, Title = "Adrenalize", ImageId=12, Ranking=0,ItemType=2 },
            new ItemModel{Id = 13, Title = "Back in Black", ImageId=13, Ranking=0,ItemType=2 },
            new ItemModel{Id = 14, Title = "Enjoy the Silence", ImageId=14, Ranking=0,ItemType=2 },
            new ItemModel{Id = 15, Title = "Parachutes", ImageId=15, Ranking=0,ItemType=2 },
            new ItemModel{Id = 16, Title = "Ride the Lightning", ImageId=16, Ranking=0,ItemType=2 },
            new ItemModel{Id = 17, Title = "Rock or Bust", ImageId=17, Ranking=0,ItemType=2 },
            new ItemModel{Id = 18, Title = "Rust in Peace", ImageId=18, Ranking=0,ItemType=2 },
            new ItemModel{Id = 19, Title = "St. Anger", ImageId=19, Ranking=0,ItemType=2 },
            new ItemModel{Id = 20, Title = "The Final Countdown", ImageId=20, Ranking=0,ItemType=2 }
        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            // Loading indicator for user
            System.Threading.Thread.Sleep(2000);
            return items;
        }
    }
}
