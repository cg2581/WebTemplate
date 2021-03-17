(function ($) {
    "use strict";
    
    /*==============================================================
                        Megnific Popup Js
    ============================================================= */
    $('a.btn-gallery').on('click', function(event) {
        event.preventDefault();
            $('.megnify-popup').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery:{enabled:true},
        });
    });
    
    /*==============================================================
                        background-image-maker
    ============================================================= */

    $('.background-image-maker').each(function () {
        var imgURL = $(this).next('.holder-image').find('img').attr('src');
        $(this).css('background-image', 'url(' + imgURL + ')');
    });
        
    /*==============================================================
                        Header Fix
    ============================================================= */
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $("#header-fix").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#header-fix").removeClass("active");
        }
    });
    
    /*==============================================================
                            Selectpicker 
    ============================================================= */
     $('.selectpicker').selectpicker();
     
    /*==============================================================
                            Sidebar 
    ============================================================= */

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
    $('#menu').metisMenu().show();

    /*==============================================================
                        Back To Top
    =============================================================*/

    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    
    /*==============================================================
                            Counter
    =============================================================*/
    $('.counter_number').counterUp({
        delay: 1,
        time: 1600
    });
    
    /*==============================================================
                            Masonry
    =============================================================*/
    var $container = $('.portfolio-box');
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: '.post',
            itemSelector: '.post'
        });
    });

    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function () {
        var $this = $(this);
        $this.on('shown.bs.tab', function () {
            $container.masonry({
                columnWidth: '.post',
                itemSelector: '.post'
            });
        }); //end shown
    });  //end each

    /*==============================================================
                        Slimscroll Chat
    =============================================================*/
  
        $('.scrollerchat').slimScroll({
            height: '440px'
        });

 
        $('.sidebar-scrollarea').slimScroll({
            height: '100%'
        });
   
        $('#mysideTabContent').slimScroll({
            height: '100vh'
        });


    /*==============================================================
                            Calendar
    =============================================================*/
    $('#calendar-demo').dcalendar(); //creates the calendar


    /*==============================================================
                                Map
    =============================================================*/
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#666', '#35528c'],
        normalizeFunction: 'polynomial',
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1.0
        },
        zoomMin: 0.85,
        markerStyle: {
            initial: {
                fill: '#252b31',
                stroke: '#252b31',
            }
        },
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#30373e',
                "fill-opacity": 1,
                stroke: '#f6a821',
                "stroke-width": 0,
                "stroke-opacity": 0
            },
            hover: {
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            }
        },
        markers: [
            //http://www.latlong.net/
            {latLng: [51.507351, -0.127758], name: 'London'},
            {latLng: [41.385064, 2.173403], name: 'Barcelona'},
            {latLng: [40.712784, -74.005941], name: 'New York'},
            {latLng: [-22.911632, -43.188286], name: 'Rio De Janeiro'},
            {latLng: [49.282729, -123.120738], name: 'Vancuver'},
            {latLng: [35.689487, 139.691706], name: 'Tokio'},
            {latLng: [55.755826, 37.617300], name: 'Moskva'},
            {latLng: [43.214050, 27.914733], name: 'Varna'},
            {latLng: [30.044420, 31.235712], name: 'Cairo'}
        ]
    });
    
    /*==============================================================
                           Fancy Select
    =============================================================*/
    $('.fancy-select').fancySelect();
    //custom templating
    $('.fancy-select1').fancySelect({
        optionTemplate: function (optionEl) {
            return optionEl.text() + '<i class="pull-left ' + optionEl.data('icon') + '"></i>';
        }
    });
    
    /*==============================================================
                            Form Text Editor
    =============================================================*/

    $('.summernote').summernote();
    var edit = function () {
        $('.click2edit').summernote({focus: true});
    };
    var save = function () {
        var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
        $('.click2edit').destroy();
    };
    
    /*==============================================================
                            data-ui-slider
    =============================================================*/
    // BOOTSTRAP SLIDER CTRL
    $('[data-ui-slider]').slider();
    
    /*==============================================================
                            Toastr Alert Js
    =============================================================*/
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-bottom-right",
        "closeButton": true,
        "progressBar": true
    };
    $('.homerDemo1').on('click', function (event) {
        toastr.info('Info - <br /> This is a custom info notification');
    });
    $('.homerDemo2').on('click', function (event) {
        toastr.success('Success - <br /> This is a success notification');
    });
    $('.homerDemo3').on('click', function (event) {
        toastr.warning('Warning - <br /> This is a warning notification');
    });
    $('.homerDemo4').on('click', function (event) {
        toastr.error('Error - <br /> This is a error notification');
    });
    
    /*==============================================================
                           Sweet Alert Js
    =============================================================*/
    if ($('.sweet-1').length > 0)
    {
        document.querySelector('.sweet-1').onclick = function () {
            swal("Here's a message!");
        };
    }

    if ($('.sweet-2').length > 0)
    {
        document.querySelector('.sweet-2').onclick = function () {
            swal("Here's a message!", "It's pretty, isn't it?")
        };
    }
    if ($('.sweet-3').length > 0)
    {
        document.querySelector('.sweet-3').onclick = function () {
            swal("Here's a message!", "Custom HTML Message!!")
        };
    }
    if ($('.sweet-4').length > 0)
    {
        document.querySelector('.sweet-4').onclick = function () {
            swal("Good job!", "You clicked the button!", "success");
        };
    }
    if ($('.sweet-5').length > 0)
    {
        document.querySelector('.sweet-5').onclick = function () {
            swal({
                title: "Are you sure?",
                text: "You clicked the button!",
                type: "info",
                confirmButtonClass: 'btn-primary',
            });
        };
    }
    if ($('.sweet-6').length > 0)
    {
        document.querySelector('.sweet-6').onclick = function () {
            swal({
                title: "Are you sure?",
                text: "You clicked the button!",
                type: "warning",
                confirmButtonClass: 'btn-primary',
            });
        };
    }
    if ($('.sweet-7').length > 0)
    {
        document.querySelector('.sweet-7').onclick = function () {
            swal({
                title: "Are you sure?",
                text: "You clicked the button!",
                type: "error",
                confirmButtonClass: 'btn-primary',
            });
        };
    }
    if ($('.sweet-8').length > 0)
    {
        document.querySelector('.sweet-8').onclick = function () {
            swal({
                title: "Sweet!",
                text: "Here's a custom image.",
                imageUrl: 'dist/images/thumbs-up.jpg'
            });
        };
    }
    if ($('.sweet-9').length > 0)
    {
        document.querySelector('.sweet-9').onclick = function () {
            swal({
                title: "Auto close alert!",
                text: "I will close in 3 seconds.",
                timer: 2000,
                showConfirmButton: true
            });
        };
    }
    if ($('.sweet-10').length > 0)
    {
        document.querySelector('.sweet-10').onclick = function () {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: false,
                confirmButtonClass: 'btn-primary',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                    function (isConfirm) {
                        if (isConfirm) {
                            swal("Deleted!", "Your imaginary file has been deleted!", "success");
                        } else {
                            swal("Cancelled", "Your imaginary file is safe :)", "error");
                        }
                    });
        };
    }
    if ($('.sweet-11').length > 0)
    {
        document.querySelector('.sweet-11').onclick = function () {
            swal({
                title: "",
                text: 'Write something interesting:',
                type: 'input',
                showCancelButton: false,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "Write something",
            },
                    function (inputValue) {
                        if (inputValue === false)
                            return false;
                        if (inputValue === "") {
                            swal.showInputError("You need to write something!");
                            return false;
                        }
                        swal("Nice!", 'You wrote: ' + inputValue, "success");
                    });
        };
    }
    if ($('.sweet-12').length > 0)
    {
        document.querySelector('.sweet-12').onclick = function () {
            swal({
                title: "Ajax request example",
                text: "Submit to run ajax request",
                type: "info",
                showCancelButton: false,
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            }, function () {
                setTimeout(function () {
                    swal("Ajax request finished!");
                }, 2000);
            });
        };
    }
    if ($('.sweet-13').length > 0)
    {
        document.querySelector('.sweet-13').onclick = function () {
            swal({
                title: "Message",
                text: 'A Custom <span style="color:#2e5aef">Html<span> Message.',
                html: true
            });
        };
    }
    
    /*==============================================================
                        Tree View Js
    =============================================================*/

    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i');
        }
        e.stopPropagation();
    });
    
    /*==============================================================
                            Data Table Js
    =============================================================*/

    $('#example').DataTable();
        
    /*==============================================================
                        Editable table
    =============================================================*/

    var clients = [
        {"Name": "Eddy lobonowsky", "Work": "Perform Cms", "date": "1 year ago", "Teg": "Design"},
        {"Name": "Kerem Suar", "Work": "Backup data base", "date": "5 min ago", "Teg": "Meeting"},
        {"Name": "Jawod $", "Work": "Month Report", "date": "1 days ago", "Teg": "Project"},
        {"Name": "Julien", "Work": "Account Password", "date": "2 year ago", "Teg": "Income"},
        {"Name": "Eddy lobonowsky", "Work": "Perform Cms", "date": "1 year ago", "Teg": "Design"},
        {"Name": "Kerem Suar", "Work": "Backup data base", "date": "5 min ago", "Teg": "Meeting"},
    ];

    $("#jsGrid").jsGrid({
        width: "100%",
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: clients,
        fields: [
            {name: "Name", type: "text", width: 180, validate: "required"},
            {name: "Work", type: "text", width: 150},
            {name: "date", type: "text", width: 100},
            {name: "Teg", type: "text", width: 100},
            {type: "control", width: 100}
        ]
    });

    /*==============================================================
                     Morris Line Chart Js
    =============================================================*/
    var day_data = [
        {"elapsed": "1", "value": 34},
        {"elapsed": "2", "value": 24},
        {"elapsed": "3", "value": 3},
        {"elapsed": "4", "value": 12},
        {"elapsed": "5", "value": 13},
        {"elapsed": "6", "value": 22},
        {"elapsed": "7", "value": 5},
        {"elapsed": "8", "value": 26},
        {"elapsed": "9", "value": 12},
        {"elapsed": "10", "value": 19}
    ];
    Morris.Line({
      element: 'graph',
      data: day_data,
      xkey: 'elapsed',
      ykeys: ['value'],
      labels: ['value'],
      parseTime: true,
      lineColors: ['#5867dd'],
      hideHover: 'auto',
      lineWidth: 3
    });
    
    /*==============================================================
                     Morris Bar Chart Js
    =============================================================*/
    Morris.Bar({
      element: 'bar',
      data: [
        {x: '2014', y: 3, z: 2, a: 3},
        {x: '2015', y: 2, z: null, a: 1},
        {x: '2016', y: 0, z: 2, a: 4},
        {x: '2017', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    barColors: ['#747ace', '#ed1c24', '#00c292'],
    hideHover: 'auto',
    labels: ['Y', 'Z', 'A']
    }).on('click', function(i, row){
      console.log(i, row);
    });
    
    /*==============================================================
                     Morris Area Chart Js
    =============================================================*/
    Morris.Area({
        element: 'area-chart',
        data: [{
            period: '2016 Q3',
            iphone: 2666,
            ipad: 1969,
            itouch: 2647
        }, {
            period: '2017 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2016 Q3',
            iphone: 2291,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2015 Q3',
            iphone: 2361,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2014 Q4',
            iphone: 2300,
            ipad: 3215,
            itouch: 5175
        },{
            period: '2013 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2012 Q1',
            iphone: 2354,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 2300,
            ipad: 2394,
            itouch: 2140
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        lineColors: ['#5867dd', '#daa400', '#e0276a']
    });
    
    /*==============================================================
                     Morris Donut Chart Js
    =============================================================*/
    Morris.Donut({
        element: 'donut-chart',
        data: [{
            label: 'Jam',
            value: 15
        }, {
                label: 'Frosted',
                value: 80
            }, {
                label: 'Custard',
                value: 35
            },{
                label: 'Jelly',
                value: 45
            }, {
                label: 'Sugar',
                value: 5
            }],
        colors: ['#ebc142','#34c73b','#3960d1','#4d5360','#dcdcdc'],
        formatter: function (y) {
            return y + '%'
        }
    });
    
    
    
})(jQuery);




