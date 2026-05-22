const data=
{
  "data_deals": {
    "once_per_day": [
      {
        "type": "data",
        "category": "hourly",
        "price_ksh": 19,
        "data": "1GB",
        "validity": "1 hour"
      },
      {
        "type": "data",
        "category": "daily",
        "price_ksh": 55,
        "data": "1.25GB",
        "validity": "Till Midnight"
      },
      {
        "type": "data",
        "category": "weekly",
        "price_ksh": 49,
        "data": "350MB",
        "validity": "7 days"
      },
      {
        "type": "data",
        "category": "hourly",
        "price_ksh": 52,
        "data": "1.5GB",
        "validity": "3 hours"
      },
      {
        "type": "data",
        "category": "daily",
        "price_ksh": 20,
        "data": "250MB",
        "validity": "24 hours"
      },
      {
        "type": "data",
        "category": "daily",
        "price_ksh": 99,
        "data": "1GB",
        "validity": "24 hours"
      }
    ],
    "repeatable_deals": [
      {
        "type": "data",
        "category": "hourly",
        "price_ksh": 22,
        "data": "1GB",
        "validity": "1 hour"
      },
      {
        "type": "data",
        "category": "hourly",
        "price_ksh": 53,
        "data": "1.5GB",
        "validity": "3 hours"
      },
      {
        "type": "data",
        "category": "daily",
        "price_ksh": 130,
        "data": "2GB",
        "validity": "24 hours"
      }
    ]
  },
  "minutes_deals": [
    {
      "type": "minutes",
      "category": "short",
      "price_ksh": 21,
      "minutes": 45,
      "validity": "3 hours"
    },
    {
      "type": "minutes",
      "category": "daily",
      "price_ksh": 51,
      "minutes": 50,
      "validity": "Till Midnight"
    }
  ],
  "sms_deals": [
    {
      "type": "sms",
      "category": "daily",
      "price_ksh": 5,
      "sms": 20,
      "validity": "1 day"
    },
    {
      "type": "sms",
      "category": "daily",
      "price_ksh": 10,
      "sms": 200,
      "validity": "1 day"
    },
    {
      "type": "sms",
      "category": "weekly",
      "price_ksh": 30,
      "sms": 1000,
      "validity": "7 days"
    }
  ]
};

const [filter,setFilter] = useState("All");

const handleClick = (type)=>{

    setFilter(type);
}

const FilterData = data.filter((deals) => {
    if (filter === "All") return true;
    return deals.type === filter 
});



  function Cards(){

    return(
<div>
    <div>19sh</div>
    <p>1GB</p>
    <P>1 hour</P>

</div>
    );
  }
       

  export default Cards