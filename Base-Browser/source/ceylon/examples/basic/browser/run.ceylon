"Run the module `ceylon.examples.basic.browser`."

shared void init() {
    dynamic {
		jQuery(".main").text("Text changed by ceylon");
    }
}