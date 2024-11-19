import React, { useState } from 'react';


//ALL items: https://prices.runescape.wiki/api/v1/osrs/mapping
//For every item valued above Nature Runes' GE price (ID 561), determine the highest profit difference between avg buy price and High Alch price
//Additionally determine the best profit for high buy/sell volume items

//DO NOT Do a GET call on 'latest' per all 3700+ item IDs for the love of Guthix

//Get items using https://prices.runescape.wiki/api/v1/osrs/1h for hourly avg price

var allItems = [];


export default function AlchPreview() {
  const [data, setData] = useState(null);
  const [itemIcon, setIcon] = useState('https://oldschool.runescape.wiki/images/Nature_rune.png');

  function handleClick() {
    initItems();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://prices.runescape.wiki/api/v1/osrs/latest?id=5698');
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
        setItemIcon();
      }
    };
    xhr.send();
  }

  function initItems() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://prices.runescape.wiki/api/v1/osrs/mapping');
    xhr.onload = function() {
      if (xhr.status === 200) {
        allItems = JSON.parse(xhr.responseText);
        //console.log(allItems);
      }
    };
    xhr.send();
  }

  function setItemIcon() { //Determine the item icon
    if (data != null) {
        var itemID = Object.keys(data.data)[0];
        console.log("Item ID from query: " + itemID);
        for (var i in allItems) {
            if (allItems[i].id == itemID)
            {
                console.log("Item icon is: " + allItems[i].icon);
                //Replace spaces in item icons with underlines
                var iconName = allItems[i].icon.replace(/ /g,"_");
                console.log("iconName: " + iconName);
                setIcon('https://oldschool.runescape.wiki/images/' + iconName);
                break;
            }
        }
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
      <img 
      src= {itemIcon}
      alt="new"
      />
    </div>
  );
}