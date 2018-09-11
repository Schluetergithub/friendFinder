$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        // for loop. loop through and compare.
        function objCompare(obj1, obj2){
            var same = true;
            for (var [key, value] of Object.entries(obj1)) {
              if(typeof value === 'object') {
                same = objCompare(obj1[key], obj2[key]);
              } else {
                if(obj1[key] != obj2[key]) same = false;
              }
            }
            
            return same;
          }
      console.log(data);
    }
  });

// make an object with an array to loop through the users
var users = {
    [{ 
        name: Sarah,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            5,
            2,
            4,
            5,
            5,
            1,
            3,
            5,
            3,
            1
          ]
      },
      {
        name:Suzie,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            4,
            1,
            1,
            4,
            5,
            1,
            2,
            1,
            4,
            1
          ]
      },
      {
        name:Angel,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            2,
            1,
            4,
            4,
            2,
            1,
            2,
            2,
            4,
            1
          ]
      },
      {
        name:Joanna,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            4,
            5,
            4,
            4,
            5,
            5,
            2,
            4,
            4,
            5
          ]
      },
      {
        name:Janice,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            5,
            5,
            4,
            4,
            5,
            3,
            3,
            5,
            4,
            5
          ]
      },
      {
        name:Brittany,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            1,
            1,
            1,
            4,
            5,
            1,
            1,
            5,
            4,
            1
          ]
      },
      {
        name:Angela,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            3,
            1,
            3,
            4,
            5,
            1,
            3,
            5,
            3,
            1
          ]
      },
      {
        name:Hillary,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            3,
            2,
            4,
            4,
            5,
            1,
            2,
            5,
            2,
            3
          ]
      },
      {
        name:Nicole,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            5,
            5,
            4,
            4,
            5,
            2,
            2,
            1,
            1,
            1
          ]
      },
      {
        name:Carly,
        photo:"https://adara.com/wp-content/uploads/2017/09/placeholder-woman.png",
        scores:[
            5,
            4,
            4,
            4,
            4,
            4,
            2,
            5,
            4,
            4
          ]
      }
                        ]};
  