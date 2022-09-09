var TableProductListAll=document.getElementById("table-product-list-all");

function getChartColorsArray(e)
{
    if(null!==document.getElementById(e)){
        e=document.getElementById(e).getAttribute("data-colors");
        if(e)
            return(e=JSON.parse(e)).map(function(e){
                var t=e.replace(" ","");
                if(-1===t.indexOf(",")){
                    var r=getComputedStyle(document.documentElement).getPropertyValue(t);
                    return r||t
                }
                e=e.split(",");
                return 2!=e.length?t:"rgba("+getComputedStyle(document.documentElement).getPropertyValue(e[0])+","+e[1]+")"
            })
    }
}

TableProductListAll&&new gridjs.Grid({
    columns:[{
        id:"productListAllCheckbox",
        name:"#",
        width:"40px",
        sort:{enabled:!1},
        plugin:{
            component:gridjs.plugins.selection.RowSelection,
            props:{
                id:function(e){return e.cell(6).data}
            }
        }
    },
    {
        name:"Product",
        width:"360px",
        formatter:function(e){
            return gridjs.html('<div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src="assets/images/products/'+e[0]+'" alt="" class="img-fluid d-block"></div></div><div class="flex-grow-1"><h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details.html" class="text-dark">'+e[1]+'</a></h5><p class="text-muted mb-0">Category : <span class="fw-medium">'+e[2]+"</span></p></div></div>")
        }
    },
    {name:"Stock",width:"94px"},
    {name:"Price",width:"101px"},
    {name:"Orders",width:"84px"},
    {name:"Rating",width:"105px",
        formatter:function(e){
            return gridjs.html('<span class="badge bg-light text-body fs-12 fw-medium"><i class="mdi mdi-star text-warning me-1"></i>'+e+"</span></td>")
        }
    },
    {name:"Published",width:"220px",
        formatter:function(e){
            return gridjs.html(e[0]+'<small class="text-muted ms-1">'+e[1]+"</small>")
        }
    },
    {name:"Action",width:"80px",sort:{enabled:!1},
        formatter:function(e){
            return gridjs.html('<div class="dropdown"><button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="apps-ecommerce-product-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item" href="apps-ecommerce-add-product.html"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li></ul></div>')
        }
    }],
    className:{th:"text-muted"},pagination:{limit:10},
    sort:!0,
    data:[[["img-1.png","Half Sleeve Round Neck T-Shirts","Clothes"],"12","$ 115.00","48","4.2",["12 Oct, 2021","10:05 AM"]],[["img-2.png","Urban Ladder Pashe Chair","Furniture"],"06","$ 160.00","30","4.3",["06 Jan, 2021","01:31 PM"]],[["img-3.png","350 ml Glass Grocery Container","Kitchen Storage & Containers"],"10","$ 25.00","48","4.5",["26 Mar, 2021","11:40 AM"]],[["img-4.png","Fabric Dual Tone Living Room Chair","Furniture"],"15","$ 140.00","40","4.2",["19 Apr, 2021","02:51 PM"]],[["img-5.png","Crux Motorsports Helmet","Bike Accessories"],"08","$ 135.00","55","4.4",["30 Mar, 2021","09:42 AM"]],[["img-6.png","Half Sleeve T-Shirts (Blue)","Clothes"],"15","$ 125.00","48","4.2",["12 Oct, 2021","04:55 PM"]],[["img-7.png","Noise Evolve Smartwatch","Watches"],"12","$ 95.00","45","4.3",["15 May, 2021","03:40 PM"]],[["img-8.png","Sweatshirt for Men (Pink)","Clothes"],"20","$ 120.00","48","4.2",["21 Jun, 2021","12:18 PM"]],[["img-9.png","Reusable Ecological Coffee Cup","Tableware & Dinnerware"],"14","$ 125.00","55","4.3",["15 Jan, 2021","10:29 AM"]],[["img-10.png","Travel Carrying Pouch Bag","Bags, Wallets and Luggage"],"20","$ 115.00","60","4.3",["15 Jun, 2021","03:51 Pm"]],[["img-1.png","Half Sleeve Round Neck T-Shirts","Clothes"],"12","$ 115.00","48","4.2",["12 Oct, 2021","10:05 AM"]],
            [["img-2.png","Urban Ladder Pashe Chair","Furniture"],"06","$ 160.00","30","4.3",["06 Jan, 2021","01:31 PM"]]]
}).render(document.getElementById("table-product-list-all"));

var options,chart,linechartcustomerColors=getChartColorsArray("customer_impression_charts");

linechartcustomerColors&&(options={
    series:[{
        name:"總廣告費",type:"area",data:[82097,119115,117719,50703,76734,75371,77883,75371,225325,20959,18931,31106,35929,55393,56230,3167,5611,8600,8887,8600,44422,9400,8949,22204,59276,76973,88715,91672,8871]
    },
    {
        name:"總觸及數",type:"bar",data:[235119,338259,334372,113606,189664,261489,270206,261489,556995,38643,34903,73351,90345,152317,156948,6269,16166,38153,39427,38155,114994,16095,15491,37735,101002,148603,171645,177367,17165]
    },
    {
        name:"Vera中山廣告費",type:"line",data:[0, 0, 0, 0, 0, 0, 0, 0, 50285, 6961, 6287, 12214, 13899, 14362, 13899, 40, 65, 62, 65, 62, 65, 0, 459, 12804, 50180, 62726, 60702, 62726, 6070]
    }
    {
        name:"Vera中山觸及數",type:"line",data:[0, 0, 0, 0, 0, 0, 0, 0, 88663, 12779, 11543, 33748, 40961, 42326, 40961, 367, 599, 580, 599, 580, 599, 0, 953, 21640, 85426, 116359, 112605, 116359, 11261]
    }
    ],
    chart:{
        height:370,
        type:"line",
        toolbar:{show:!1}
    },
    stroke:{
            curve:"straight",
            dashArray:[0,0,8],
            width:[2,0,2.2]
    },
    fill:{
        opacity:[.1,.9,1]
    },
    markers:{
        size:[0,0,0],strokeWidth:2,hover:{size:4}
    },
    xaxis:{
        categories:["2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12","2022-01","2022-02","2022-03","2022-04","2022-05","2022-06","2022-07","2022-08"],
        axisTicks:{
            show:!1},
            axisBorder:{
                show:!1
            }
    },
    grid:{
        show:!0,
        xaxis:{
            lines:{
                show:!0
            }
        },
        yaxis:{
            lines:{
                show:!1
            }
        },
        padding:{
            top:0,right:-2,bottom:15,left:10
        }
    },
    legend:{
        show:!0,
        horizontalAlign:"center",
        offsetX:0,
        offsetY:-5,
        markers:{
            width:9,
            height:9,
            radius:6
        },
        itemMargin:{
            horizontal:10,vertical:0
        }
    },
    plotOptions:{
        bar:{
            columnWidth:"30%",
            barHeight:"70%"
        }
    },
    colors:linechartcustomerColors,
    tooltip:{
        shared:!0,y:[
        {
            formatter:function(e){
                return void 0!==e?e.toFixed(0):e
            }
        },
        {
            formatter:function(e){
                return void 0!==e?"$"+e.toFixed(2)+"k":e
            }
        },
        {
            formatter:function(e){
                return void 0!==e?e.toFixed(0)+" Sales":e
            }
        }]
    }
},
(chart=new ApexCharts(document.querySelector("#customer_impression_charts"),options)).render());

var counterValue=document.querySelector(".counter-value");
counterValue&&(counter=document.querySelectorAll(".counter-value"),speed=250,counter&&Array.from(counter).forEach(function(i){
    !function e(){
        var t=+i.getAttribute("data-target"),
        r=+i.innerText,
        a=t/speed;a<1&&(a=1),r<t?(i.innerText=(r+a).toFixed(0),setTimeout(e,1)):i.innerText=t
    }()
}));

var swiper,VerticalSwiper=document.querySelector(".vertical-swiper");
VerticalSwiper&&(swiper=new Swiper(".vertical-swiper",{
    slidesPerView:2,
    spaceBetween:10,
    mousewheel:!0,
    loop:!0,
    direction:"vertical",
    autoplay:{
        delay:2500,
        disableOnInteraction:!1
    }
}));