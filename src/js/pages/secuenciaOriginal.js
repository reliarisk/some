import React from "react";
var $ = require("jquery");
require("../../lib/jQuery.Gantt/js/jquery.fn.gantt.js");
require("../../lib/jQuery.Gantt/css/style.css");

require("../../css/welcome.css");

import Article from "../components/Article";

export default class secuenciaOriginal extends React.Component {
  render() {

	return(<div class="gantt"></div>);
  }
  componentDidMount(){

    var gantt_obj = [
        {
            name: "Medardo",
            desc: "consultor base",
            values:[{
                from: "2018-10-10T00:00:00",
                to:"2018-11-23T00:00:00",
                label:"medio",
                customClass: "ganttGreen",
                id_grupo:1
            },
                {
                    from: "2018-10-05T00:00:00",
                    to:"2018-10-09T00:00:00",
                    label:"ssssssa",
                    customClass: "ganttOrange",
                    id_grupo:1
                },
                {
                    from: "2018-11-24T00:00:00",
                    to:"2018-11-30T00:00:00",
                    label:"ssssssa",
                    customClass: "ganttOrange",
                    id_grupo:1
                }
            ]

        },
        {
            name: "hernando",
            desc: "consultor base",
            values:[{
                from: "2018-11-24T00:00:00",
                to:"2018-12-11T00:00:00",
                label:"hola",
                customClass: "ganttOrange",
                id_grupo:2
            },
                {
                    from: "2018-11-11T00:00:00",
                    to:"2018-11-23T00:00:00",
                    label:"hola",
                    customClass: "ganttRed",
                    id_grupo:2
                },
                {
                    from: "2018-12-12T00:00:00",
                    to:"2019-01-11T00:00:00",
                    label:"hola",
                    customClass: "ganttRed",
                    id_grupo:2
                }]

        },
        {
            name: "Luis",
            desc: "consultor base",
            values:[{
                from: "2019-04-22T00:00:00",
                to: "2019-04-26T00:00:00",
                label:"ddddd",
                customClass: "ganttPersonal",
                id_grupo:3
            },
                {
                    from: "2019-04-27T00:00:00",
                    to: "2019-04-29T00:00:00",
                    label:"ddddd",
                    customClass: "ganttGreen",
                    id_grupo:3
                },
                {
                    from: "2019-04-19T00:00:00",
                    to: "2019-04-21T00:00:00",
                    label:"ddddd",
                    customClass: "ganttGreen",
                    id_grupo:3
                }]

        }
    ];
    $(".gantt").gantt({

        source: gantt_obj,
        itemsPerPage: 40,
        onRender: function() {
            if (window.console && typeof console.log === "function") {
                console.log("chart rendered");
            }


        }
    });
  }
}
