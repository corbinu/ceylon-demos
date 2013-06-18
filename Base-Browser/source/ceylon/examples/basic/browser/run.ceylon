"Run the module `ceylon.examples.basic.browser`."

shared void init() {
    dynamic {
        value jquery = require("jquery");
        jquery(".main").text("Text changed by ceylon");
    }
}