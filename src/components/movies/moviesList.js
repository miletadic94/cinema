 const movies = [{
    "id": 1,
    "name": "Chance Pe Dance",
    "picture": "C:\Users\Mile Tadic\Downloads\pariz.jpg",
    "actor": "Anatola Breckell",
    "genre": "Comedy|Drama|Romance",
    "distribution year": 1989
  }, {
    "id": 2,
    "name": "A Clockwork Orange",
    "picture": 'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    "actor": "Estel Galbreath, Anatola Breckell",
    "genre": "Adventure|Drama",
    "distribution year": 1995
  }, {
    "id": 3,
    "name": "A Clockwork Orange",
    "picture": "https://www.jw3.org.uk/sites/default/files/JW3-Cinema-Banner.jpg",
    "actor": "Matthey McConaghey, Mila Kunis, JustinTimberlake, Matthey McConaghey, Mila Kunis, JustinTimberlake",
    "genre": "Drama|Horor",
    "distribution year": 1973
  }, {
    "id": 4,
    "name": "G Men",
    "picture": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "genre": "Crime|Drama",
    "distribution year": 2005
  }, {
    "id": 5,
    "name": "Bread, My Sweet, The (a.k.a. Wedding for Bella, A)",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLfVPPaxNBFP5mtzVL0nhIA4mUmBaqB/WSUy459FBs6amIIv0DJBcR9GIOWqSI9JSjesjFi1eDoNBEsdEaEFsRD0EPLYKxNMREyY/NbvbH+GbdTdOWOvB4M7Pvfe9735tlnHOIZd24znHuAsxiEdw0wS0LtmHAdv3o/Dz4q3UEXq8xDK0RbzOcxIcSbXHv+b6Bw2sfwDAdEFvXnWAHSHh3P3IMgDQAoI+ckhGPwxIgZMJbmgY2PQ1b7VFM/z8M+saKpmnLzctX0AmOQZNlGIJ6uw3lVwORN28RpJhjAbbv3qlyVe2EJibGFDrbtg1PYALGJ1nuqLMz1aVDAEwEVSqVpGma+UgkEm1TxV6v5wAIkyQJPp/PsVKptKfr+mI6nf5wQAOimgmHw9FWqwVVVWHRBIQJANFGp9Nx7hOJRJTYZI6ISEEpwURUNoXqbnVhHli320UgEAAxSB1poVwuW7FYTKrX604ShjQYnD/mwbfy0Ks7sGT+g64eXiyYq46IfRqPFzzsB/ut5zhZfY+zV9PwTZ1H70shVnlXvF+cHe06LRCt5uBJu7179IXvbTzFmZlLULbXwZ4swb/zDJPxcZkzfnPEBdig/heF0s7sDzGRGjUo0Slg4db+/O+dgmyzScmd8+rm5uaeoijw+/0HNGCMgYfCUD+/AChJv83wm6xVqwstdplHPZfLXSMmK8lkMhoMBv+9TpdF4+VjnPi2htPj9E9IVbTrJr7XZMvQ+PIAQKxsNpskkAyJmiILCXGppSbZxtyf0q5S/7ogWyxOlX9S1qO5gvngL9401yPDHgg9AAAAAElFTkSuQmCC",
    "actor": "Tristam Cruces",
    "genre": "Drama|Romance",
    "distribution year": 1998
  }, {
    "id": 6,
    "name": "Nuts",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI5SURBVDjLpVM7i1pREJ7rYxXFiKjxVYhIMBhMbWGbIk0wasCsCCkD1vkR5gcEmxSpsrLIxVaQCKYQRAW1kgTxrVEUn7i+bmYO3MUlkRQ5MJwzc2e++Wb4LicIAvzPkZ072WxWgYCv0N6eTqeneD9Bw+epjvcPvD+jZf1+/1Gs4UQGWOzG91ej0fjcbDaDWq0GlUoF9H0+n8NyuYR2uw3j8fg7xsLBYLDHCimBLJPJfGu1WtROuHT2+71QqVSEZDL5RayTiFTQeWYymf45s81mA2zy8o8dYJAhjkYjUCqVoFAoQC6Xs9hms4HpdAq9Xg+cTifLvQggk8lgNpvBdrtl/uFwgMViAXd3d+wbxf4KIM4klUoZA0omw7kZiLhsKj4ej5cZULJYxHEcSxZjEonkMgMRgOYtFArQ6XRAr9eznbjdbpZTq9Wg2WzCcDg0xGKxD/V6/dMDgN1uB+l0mvnRaBTW6zV0u10GSOChUIgtdjAYcKVS6SPqwngvpFQq9QuFY8zn8/Dm+hpSNzdQrVaBROXxeKgIJpMJdQer1brDBlc8z8/vGdCsxWIRNBoN8wOBAPPD4TDodDpYrVakQkgkEuBwOBaYYtBqtYrzEd6hZHlc1hX5NAqxi8fjTNZ0aCRqVC6Xf/p8PgPqYsud/42RSOQFbvzW6/U+QsVxNC8tsdFoMGHZ7XYgtWLOFJcsyeVywwcALpdLarFYPNiRxzkfYxEx5FCF75Fhy2Aw8OjLUVTHfr8/RkavfwO7WaXhrjM2EgAAAABJRU5ErkJggg==",
    "actor": "Garik Raphael",
    "genre": "Drama",
    "distribution year": 2003
  }, {
    "id": 7,
    "name": "Stoic",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH2SURBVDjLldPLSxtRFAbwm7ooUheuSn2iQqHtLkZTFGsXShA3LYUi2FJR8VWhuhC6iFAfiEZRE0jUUNDGNKVVxIJUSnGj4APFQhf9D0pCXs1z8tav9wyJjI9ovfAxA3PPb+4Z5jAAjK98HgWP8ooU8dygmlRYElBEIhFvPB4/SiQSuCj8OfR6ve4skgKUVBwMBiEIwkl8Ph88Hg/sdruI2Gw2GAyGUwgtGQG0IRwOIxqNildKIBCA1+uFw+EQgVAoBHqJ0WgUkXMAFadCABX4/X44nc5zLSW/iewUwNs42UD31HeqFZfLJZ7EarWmB85GitBJ6Hu43e7/B6RI76dqtC3I4fY4rwdQYrEYuswVGFxrRMPcPYQiwauBHssjvPlYgc7FcrTMy9G/+hxLBzr0LT+BSpuDrLyMx5cC3eaH+PpzBiuHerHw84EW2o0+mHbH0WlRoXz05tEDtSw7LdDK+6XiqR890Hzvxsh6OwbWmjH0rQNzW8N4+aEKd9+xRFrgxfv7+LKvhWVvEqadccxvj3HkNWa3htBuqUORmv3NfcvkUuBYCjybLUG9Lh+107dRNZGNVwuVmNkcQItZhTLNHWRVsgbpLJTxv0/ghWmHSTF2C02mGig1efj955dAAygFCgi5bJSL+1m4UJ2BzFL2NDn6BVT7D+X3feV2c5mYAAAAAElFTkSuQmCC",
    "actor": "Sonya Devenny",
    "genre": "Drama",
    "distribution year": 1988
  }, {
    "id": 8,
    "name": "Vanquished, The (I vinti)",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJrSURBVDjLnZPda1JxGMcVxiCiPyD6B7op2FUE3UR0EQRddBHBGDNsvbKE1CWJtpqewbSNdMUg2IjtQieNE5XuOC98Yb6wC/EVNAVfEBkMN+fxXZ9+z4+OSXUR+8HDj3N4vt/v53k4RwQAopOWx+O5diKh3+8fdblcapZly/9sSCQSZ2KxmD4cDu8Fg0GWJF0ZSh2zk2Oz2fi1tbW/xfF4/BQR7xUKBTg+PoZyuQyhUAgcDse20+lcIqnZVCoFPp8PjEbjxp/Jo9FodDeXywGefr8Pwkkmk2C1WnlCACaT6YBhmGm1Wn1aEIpJw1QkEilks1nodDrQ6/WoAdbh4SHwPA+lUgnMZjPo9fpxpVI5ilpEFpP6nM/nKTIKEBub2+02IE06nYZarUZNOY4DnU6nEKhFZFGvBGQBGwkymQwQMigWi9BoNGihIc6v1WrtA4NAIOBDRAEXU7rdLtTrdTo3LhPxkQ6NSSCoVCrXwMDtdu+3Wq2BEFOazSZNRGMU4G0P2uD5hwmYensL7s5d5W+8uKimBt6trX1MQ3dBKCQeHR1Rw0/f3sPspgS+xpYhXOJg0fkY7ixegEtPzhpEoZUVD+4A04eFmCrMPMFc77HRJWAT7+ieDDv3YXHnARo0ROkZ5Sq/sABtr5cKqtUqLRwLjdbX1+HmyzH4HvsIw+dLZBkNQJSTSkd+PJverb95TZeGyZVKBcg3ARaLBRQKxezlp+caC9w9YLhJKma2J38T4CKyEslI9NHDVXZmxrOhkB9oNJoS2fSmXC4fl8lkYtI4d9twHoyclCbjjc90B//7B5LmeVJVxP51z+P7nwtGFih8vipxAAAAAElFTkSuQmCC",
    "actor": "Sammy Oliphand",
    "genre": "Drama",
    "distribution year": 2001
  }, {
    "id": 9,
    "name": "Wonderland",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHJSURBVDjLY/j//z8DJZiBZgY4tN9wcO6+0erZd2uKc+fNfoeWGxMcW27Msiq+3GWUdIZXL/okI14D7JqvB+csf3Rv4p6X//t3Pf/fvf35/8Ilj3471V3bph9zmougC6xrr8mETbu7q3jl40/FKx5+LVzy8Ltd+eUZBvGnOYjygk3llfKCZY++u3fcWutcd21B07on/61yz88kKgwsCi8qJc++9yhu2p37ppnnQ4C4oWblo/9WOReXEjTANOsCs1PD9VVZ8+9/N0k7m6Yfe5LLOPFMR+Wyh/9dqq5eUvc6xIbXALOs8zEZc+9/C+q+ddEw/rSfXuRxLfP0swuqgAYEt934pOq2nxenAUbJZ0TjJt9+Vbn80X+v5huXrbLOb7LMOLfVterqjcYVj/+Htd38qey4TxqrAQaxpxntSy7PBvnVPO0MSmCZJ5/ZWL7g/v+ozlv/lex2K2EYoB9zigsYPS6lSx7+j+i59UYn6JgtTIGK635hdY/D9dnT7vxP6L/9X9F+b4icxTYmFAMsMs6ti+2/9S9hwu3/Ac3X32oHHOlVdtoroGS/R0vb9/Aip8ILrwLrrv33rbn63zD02F5Zy22GtM8LdDMAACVPr6ZjGHxnAAAAAElFTkSuQmCC",
    "actor": "Mordecai Edler",
    "genre": "Crime|Drama|Mystery|Thriller",
    "distribution year": 2001
  }, {
    "id": 10,
    "name": "Million Dollar Mermaid",
    "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFZSURBVDjL3ZM9S0JhGIbPH/APBEFQ7Q32gS0tlQ21iDVYJ/qAooaGliYRtKBBimrIwKSkooTGaiitFnvJjzLLPGXZCfVVRMWPo6ZwNzaZmlvDtT1cw831MACYWmD+gYAQglpgCCEoFot/glL6IygrKnwhYl1B6HwWcbepekHUbkCUzKGQIqCWCcQ5S+WC2MMRIlcsCgkjEm4VolYl3vaH4LkwViYImReQjx0iF1QiR7eQuFdC4FXg9H2VjRi5WUfatwzBP4MsPw/hfRQCJ4dD0wWGUopSBDzX4E+nETBPIullIbwMIOtTIPMsh0Mtxt3JbulAuM2WYd+2xCHwOmReZRC8PbCttqed6lbq0rTRA7ZB9muJHyapMxfcQdLVAeGpF/aNzoxO0Th+JqsTXbL1orIpfx5LST68hIy3H7Y1SUo/1jRS1S8QrXjx0dAdvtVK/HtTzYOl7r4BQSM7uFIKnq0AAAAASUVORK5CYII=",
    "actor": "Rollie Bashford",
    "genre": "Drama|Musical",
    "distribution year": 1993
  }]

  export default movies;