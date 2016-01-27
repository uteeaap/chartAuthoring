var demo = demo || {};

/*

Potential demo color stacks:

Grey Scale: colors: ["#979798", "#bbbdc0", "#58585b", "#e6e7e8", "#231f20"]
Green: colors: ["#00a59a", "#9bc863", "#1a6b61", "#e9ea7b", "#1b443d"]
Blue: colors: ["#04ca6dc", "#65cdf5", "#546ab2", "#b6e2ec", "#20386c"]
Red: colors: ["#f15e4e", "#faa634", "#a41c3f", "#fde95f", "#5b173b"]
Varied#1: colors: ["#04858d", "#41beae", "#faa634", "#f15e4e", "#004861"]
Varied#2: colors: ["#f7961c", "#87acdb", "#ffc60a", "#a2ce5a", "#f15e4e"]
Varied#3: colors: ["#f15e4e", "#acdee4", "#73c163", "#ffc74a", "#41beae"]

*/

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("floe.chartAuthoring.demo");

    fluid.defaults("floe.chartAuthoring.demo", {
        gradeNames: ["floe.chartAuthoring"],
        listeners: {
            "onToolReady.addExampleInput": {
                funcName: "{that}.updateDataEntryPanelFromDataSet",
                args: ["{that}.options.initialData"]
            }
        },
        initialData:
            [{
                label: "Value #1",
                value: 75
            },
            {
                label: "Value #2",
                value: 17
            },
            {
                label: "Value #3",
                value: 33
            }]
        });
})(jQuery,fluid);
