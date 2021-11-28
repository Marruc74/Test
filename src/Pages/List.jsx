import React, { useEffect, useState } from "react";
import mockedData from "./Mock.json";
import Item from "./Item";

const List = () => {
  const [data, setData] = useState(undefined);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(undefined);

  const renderData = () => {
    let articles = Object.assign([], data.articles);

    if (filter) {
      articles = articles.filter((item) => item.price.amount < 50);
    }

    // eslint-disable-next-line default-case
    switch (sort) {
      case "price_asc":
        articles.sort((a, b) => (a.price.amount > b.price.amount ? 1 : -1));
        break;
      case "price_desc":
        articles.sort((a, b) => (a.price.amount < b.price.amount ? 1 : -1));
        break;
      case "rating":
        articles.sort((a, b) => (a.averageRating < b.averageRating ? 1 : -1));
        break;
    }

    return articles.map((item, index) => {
      return <Item key={index} item={item}></Item>;
    });
  };

  const onFilterClickHandler = () => {
    setFilter(!filter);
  };

  const onSortChangeHandler = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    // fetch("https://shop-bff.fyndiq.se/code-assignment/articles", {
    //   mode: "no-cors",
    //   method: "GET",
    //   headers: {
    //     market: "SE",
    //     locale: "sv-SE",
    //   },
    // })
    //   .then((response) => {
    //     setData(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setData(mockedData);
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{}}>
          <input
            type="checkbox"
            id="filter"
            onClick={onFilterClickHandler}
            value={filter}
            style={{ height: "15px", width: "15px" }}
          />
          <label style={{ fontSize: "20px" }}>Cheaper than 50 kr</label>
        </div>
      </div>
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        <div>
          <span style={{ marginRight: "10px" }}>Sortera på:</span>
          <select
            id="sort"
            onChange={(event) => onSortChangeHandler(event)}
            style={{ fontSize: "20px" }}
          >
            <option>Mest relevanta</option>
            <option value="price_asc">Billigast först</option>
            <option value="price_desc">Dyrast först</option>
            <option value="rating">Populärast</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data && renderData()}
      </div>
    </div>
  );
};

export default List;
