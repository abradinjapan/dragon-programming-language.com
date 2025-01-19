let site_json = {
    pages: [
        {
            name: "empty",
            top_links: "normal",
            left_links: "empty",
            content: [
                {
                    type: "text",
                    data: "Page not found.",
                }
            ]
        },
        {
            name: "links",
            top_links: "normal",
            left_links: "empty",
            content: [
                {
                    type: "header",
                    data: "Dragon Programming Language Main Repository",
                },
                {
                    type: "external_link",
                    data: "To the dungeon where the dragon slumbers...",
                    link: "https://github.com/abradinjapan/dragon"
                },
                {
                    type: "header",
                    data: "Dragon Compiler Tools Repository",
                },
                {
                    type: "external_link",
                    data: "To the highlands where the dragon soars across the sky...",
                    link: "https://github.com/abradinjapan/dragon-compiler-tools"
                },
                {
                    type: "header",
                    data: "Dragon Testing Repository",
                },
                {
                    type: "external_link",
                    data: "To the battlefield where the dragon fights a brave knight...",
                    link: "https://github.com/abradinjapan/dragon-testing"
                },
                {
                    type: "header",
                    data: "Dragon Website Repository",
                },
                {
                    type: "external_link",
                    data: "To the dragon's final resting place...",
                    link: "https://github.com/abradinjapan/dragon-programming-language.com"
                }
            ]
        },
        {
            name: "tutorial.home",
            top_links: "normal",
            left_links: "tutorial",
            content: [
                {
                    type: "header",
                    data: "Welcome!"
                },
                {
                    type: "text",
                    data: "Welcome to the Dragon programming language where roaring dragons sometimes slumber...!"
                },
                {
                    type: "header",
                    data: "Introduction"
                },
                {
                    type: "text",
                    data: "So what is Dragon exactly?"
                },
                {
                    type: "text",
                    data: "Dragon is a scripting language designed primarily for compiler development. Although the language still lacks many features, the base of the language is mainly fleshed out."
                },
                {
                    type: "text",
                    data: "This page is a simple dragon tutorial, read on if you dare!"
                },
                {
                    type: "header",
                    data: "Syntax"
                },
                {
                    type: "text",
                    data: "Dragon is designed to be syntactically very simple while retaining robust functionality. As it turns out, you actually don't need a lot of syntax to do almost everything a programming language can do. Contrary to many modern day languages."
                },
                {
                    type: "text",
                    data: "Dragon syntax is broken down into a few main categories: Statements, Functions and Structures."
                },
                {
                    type: "header",
                    data: "Statements"
                },
                {
                    type: "text",
                    data: "There are three types of statements in Dragon: Dragon calls, scopes and offsets. Dragon calls are the core of dragon syntax. They're very simple yet robust. Dragon calls are composed of three things: A name of the dragon function being called, zero or more input arguments & zero or more output arguments."
                },
                {
                    type: "text",
                    data: "Example:"
                },
                {
                    type: "code_block",
                    data: "function_call_name(input_0, input_1, etc)(output_0, output_1, etc)"
                },
                {
                    type: "text",
                    data: "There are no semicolons needed at the end of a dragon call. There is also no separate variable declaration syntax."
                },
                {
                    type: "text",
                    data: "Variables in dragon are either declared or reused by writing their name in the output arguments of a Dragon call. This means that if a variable is already declared and is the correct type, it will be overwritten. If it is undeclared, it is declared there in the arguments with the name you give it and the type based on it's position in the function call. And if it's already taken with a different type, the compiler will return an error."
                },
                {
                    type: "text",
                    data: "It should also be noted that you can reuse variables from the input arguments in the output arguments. There is no restrictions when using a variable multiple times in either argument set."
                },
                {
                    type: "header",
                    data: "Function Declarations"
                },
                {
                    type: "text",
                    data: "All dragon function declarations have one name, one set of zero or more input arguments, one set of zero or more output arguments, an equals sign and then finally a scope with your code in it."
                },
                {
                    type: "text",
                    data: "An argument in a function declaration must have exactly one name and exactly one type denoted by an exclamation point. (More on types soon.)"
                },
                {
                    type: "code_block",
                    data: "function_name(input_0 !type, input_1 !type, input_2 !type, etc !type)(output_0 !type, output_1 !type) = {\n\t[ function body ]\n}"
                },
                {
                    type: "text",
                    data: "There are three types of statements that go inside functions: Dragon calls, Offsets & Scopes."
                },
                {
                    type: "text",
                    data: "Dragon calls are a very simple form of function call that have one name and two sets of arguments, equivalent to their declaration format. Except that they (usually) don't require an explicit type. They are called like so:"
                },
                {
                    type: "code_block",
                    data: "summon_dragon(name, ritual, caster)(spawn_point, new_powers)"
                },
                {
                    type: "text",
                    data: "Notice how the outputs don't have an explicit type. This is because outputs are assigned types based on the declaration that they conform to. In other words, variables are declared in outputs and those outputs' types will be assigned automatically."
                }
            ]
        },
        {
            name: "documentation.functions.home",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "Documentation Home"
                },
                {
                    type: "text",
                    data: "Dragon's built in functions."
                },
                {
                    type: "text",
                    data: "Search by selecting a link on the left side of the webpage."
                }
            ]
        },
        {
            name: "documentation.structures.home",
            top_links: "normal",
            left_links: "documentation.structures",
            content: [
                {
                    type: "header",
                    data: "Dragon Built In Structures"
                },
                {
                    type: "text",
                    data: "All built in structures."
                },
                {
                    type: "header",
                    data: "!dragon.cell"
                },
                {
                    type: "code_block",
                    data: "!dragon.cell\n(\n\t[internal_value]\n)"
                },
                {
                    type: "text",
                    data: "The dragon cell is the single foundational structure type in Dragon. It cannot be divided further into smaller variables. It's usage is like a register in assembly. That means that every !dragon.cell is a fixed size of 64 bits and how you operate on it depends on what the data inside the cell is intended to be. There is no separate integer type, pointer type, floating point type, boolean type, etc. Just cells and structures."
                },
                {
                    type: "header",
                    data: "!dragon.buffer"
                },
                {
                    type: "code_block",
                    data: "!dragon.buffer\n(\n\tstart !dragon.cell,\n\tend !dragon.cell\n)"
                },
                {
                    type: "text",
                    data: "The dragon buffer is the universal type for dealing with any kind of range of memory from its starting byte to its ending byte. Hence the 'start' member and the 'end' member."
                },
                {
                    type: "header",
                    data: "!dragon.current"
                },
                {
                    type: "code_block",
                    data: "!dragon.current\n(\n\tbuffer !dragon.buffer,\n\tprogress !dragon.cell\n)"
                },
                {
                    type: "text",
                    data: "The dragon current is a type dedicated to walking through buffers using pointers. The 'buffer' member is the range of the walk and the 'progress' is the current byte ready to be read.",
                },
                {
                    type: "header",
                    data: "!dragon.list"
                },
                {
                    type: "code_block",
                    data: "!dragon.list\n(\n\tallocation !dragon.buffer,\n\tlength !dragon.cell,\n\tincrease !dragon.cell,\n\tappend_count !dragon.cell\n)"
                },
                {
                    type: "text",
                    data: "The dragon list is a type of buffer that expands as more memory is required. The allocation is the physical block of memory that holds the list. The length holds the amount of bytes that the list is currently using. When the allocation needs to be expanded, a new buffer equivalent to the old allocation plus 'increase' is allocated. After the allocation the old buffer has it's data copied to the new allocation, the old buffer is deallocated and is replaced."
                },
                {
                    type: "text",
                    data: "IMPORTANT: Keep in mind that when the list has to reallocate and copy to expand it's capacity, the old buffer is deallocated and the new one takes it's place. Be careful not to setup a pointer to a list that might need to be reallocated!"
                },
                {
                    type: "header",
                    data: "!dragon.time"
                },
                {
                    type: "code_block",
                    data: "!dragon.time\n(\n\tseconds !dragon.cell,\n\tnanoseconds !dragon.cell\n)"
                },
                {
                    type: "text",
                    data: "The dragon time structure is an integer representation of seconds and nanoseconds. This structure captures a point in time from a dragon function and can be subtracted and added to measure program execution time."
                }
            ]
        },
        {
            name: "documentation.function_calls.set",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "The 'dragon.set' Function Call"
                },
                {
                    type: "text",
                    data: "This function call is how hard coded numbers and buffers are written to variables."
                },
                {
                    type: "text",
                    data: "There are two types of setters. String setters and literal setters. String sets are just dragon style strings set to a buffer and literal sets are things like hex, binary and decimal value setting."
                },
                {
                    type: "header",
                    data: "Strings"
                },
                {
                    type: "text",
                    data: "Strings are in the first argument of the statement inputs and their variable is in the first argument of the outputs."
                },
                {
                    type: "text",
                    data: "They are any text surrounded by double quotes like a typical string in most languages."
                },
                {
                    type: "code_block",
                    data: "dragon.set(\"This is a string, prepare yourselves for battle!\")(string_name)"
                },
                {
                    type: "text",
                    data: "The only thing about dragon strings is that there is no backslash escape sequences."
                },
                {
                    type: "text",
                    data: "Instead, Dragon allows the user to insert one or more hex valued bytes into the string using a percent sign, exactly two hex digits per byte and one semi colon."
                },
                {
                    type: "code_block",
                    data: "dragon.set(\"New line -> %0a;\")(string_variable)\ndragon.set(\"Manually inserting three tabs -> %09;%09;%09;\")(string_variable)"
                },
                {
                    type: "header",
                    data: "Binary Literals"
                },
                {
                    type: "text",
                    data: "Binary literals are in the first argument of the statement inputs and the variable is the first output argument."
                },
                {
                    type: "text",
                    data: "Binary literals are written with the type specifier 'dragon.binary.', ones, zeros and optionally underscores. Underscores are just formatting to spread out the bits in any way you want and have no data affecting value. The bits go highest to lowest by left to right and they can have anywhere from 1 to 64 bits."
                },
                {
                    type: "text",
                    data: "Valid examples:"
                },
                {
                    type: "code_block",
                    data: "dragon.set(dragon.binary.10101010)(variable_name_here)\ndragon.set(dragon.binary.10_1__00101010)(variable_name_here)"
                },
                {
                    type: "header",
                    data: "Integer Literals"
                },
                {
                    type: "text",
                    data: "Integer literals are written with the type specifier 'dragon.integer.', digits 0 through 9, underscores and 'n' for negative using twos compliment. Underscores are also available and are just formatting. The digits go from left to right as highest to lowest. There is no limit to how many digits a number can contain. Keep in mind however that the value of the number is still limited to 64 bits. Overflow is kept to allow for larger numbers to still have representation. And if the number is negative, the character lower case 'n' is placed as the very first digit in the literal."
                },
                {
                    type: "text",
                    data: "Valid examples:"
                },
                {
                    type: "code_block",
                    data: "[ positive integers ]\ndragon.set(dragon.integer.1234567890)(variable_name_here)\ndragon.set(dragon.integer.0_5__4__4312432)(variable_name_here)\n\n[ negative integers ]\ndragon.set(dragon.integer.n1234567890)(variable_name_here)\ndragon.set(dragon.integer.n0_5__4__4312432)(variable_name_here)"
                },
                {
                    type: "header",
                    data: "Hexadecimal Literals"
                },
                {
                    type: "text",
                    data: "Hexadecimal literals are written with the type specifier 'dragon.hexadecimal.', digits 0 through f (both upper & lower case are ok) and underscores. Underscores are just formatting. The hex-digits go from left to right as highest to lowest. There is no hex-digit limit, but keep in mind that overflow can occur."
                },
                {
                    type: "text",
                    data: "Valid examples:"
                },
                {
                    type: "code_block",
                    data: "dragon.set(dragon.hexadecimal.00_cc_ff_ff)(rgba_color)\ndragon.set(dragon.hexadecimal.102030ac_d_)(random_value)"
                },
                {
                    type: "header",
                    data: "Boolean Literals"
                },
                {
                    type: "text",
                    data: "Booleans can either be written as true or false. No underscores allowed."
                },
                {
                    type: "text",
                    data: "Valid examples:"
                },
                {
                    type: "code_block",
                    data: "dragon.set(dragon.boolean.false)(variable_name_here)\ndragon.set(dragon.boolean.true)(variable_name_here)"
                },
                {
                    type: "header",
                    data: "Floating Point Literals"
                },
                {
                    type: "text",
                    data: "Apoligies, but they are not currently implemented. :("
                }
            ]
        },
        {
            name: "documentation.function_calls.print.debug_cell",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.debug_cell(cell)()"
                },
                {
                    type: "text",
                    data: "This function prints a cell as an unsigned integer."
                }
            ]
        },
        {
            name: "documentation.function_calls.print.character",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.character(cell)()"
                },
                {
                    type: "text",
                    data: "This function prints the first byte from a cell to the console."
                }
            ]
        },
        {
            name: "documentation.function_calls.print.buffer_as_string",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.buffer_as_string(buffer)()"
                },
                {
                    type: "text",
                    data: "This function prints a buffer like a string."
                }
            ]
        },
        {
            name: "documentation.function_calls.print.cell_as_binary",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.cell_as_binary(cell)()"
                },
                {
                    type: "text",
                    data: "This function prints a cell as a bunch of 64 bits."
                }
            ]
        },
        {
            name: "documentation.function_calls.print.new_line",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.new_line()()"
                },
                {
                    type: "text",
                    data: "This function prints a new line to the console."
                }
            ]
        },
        {
            name: "documentation.function_calls.print.tabs",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.print.tabs(tab_count)()"
                },
                {
                    type: "text",
                    data: "This function prints zero or more tab characters (0x09) as specified by tab_count."
                }
            ]
        },
        {
            name: "documentation.function_calls.copy",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                {
                    type: "header",
                    data: "dragon.copy(source)(destination)"
                },
                {
                    type: "text",
                    data: "This function copies one structure from the source to the destination. Any type is valid as long as both types are the same."
                }
            ]
        }
    ],
    top_links: [
        {
            name: "empty",
            content: []
        },
        {
            name: "normal",
            content: [
                {
                    text: "Tutorial",
                    page: "tutorial.home",
                },
                {
                    text: "Structures",
                    page: "documentation.structures.home"
                },
                {
                    text: "Functions",
                    page: "documentation.functions.home"
                },
                {
                    text: "Links",
                    page: "links",
                }
            ]
        }
    ],
    left_links: [
        {
            name: "empty",
            content: []
        },
        {
            name: "tutorial",
            content: [
                {
                    text: "Welcome!",
                    page: "tutorial.home",
                }
            ]
        },
        {
            name: "documentation.functions",
            content: [
                {
                    text: "Home",
                    page: "documentation.functions.home"
                },
                {
                    text: "dragon.set(value)(variable)",
                    page: "documentation.function_calls.set"
                },
                {
                    text: "dragon.print.debug_cell(value)()",
                    page: "documentation.function_calls.print.debug_cell"
                },
                {
                    text: "dragon.print.character(character)()",
                    page: "documentation.function_calls.print.character"
                },
                {
                    text: "dragon.print.buffer_as_string(buffer)()",
                    page: "documentation.function_calls.print.buffer_as_string"
                },
                {
                    text: "dragon.print.cell_as_binary(cell)()",
                    page: "documentation.function_calls.print.cell_as_binary"
                },
                {
                    text: "dragon.print.new_line()()",
                    page: "documentation.function_calls.print.new_line"
                },
                {
                    text: "dragon.print.tabs(tab_count)()",
                    page: "documentation.function_calls.print.tabs"
                },
                {
                    text: "dragon.copy(source)(destination)",
                    page: "documentation.function_calls.copy"
                }
            ]
        },
        {
            name: "documentation.structures",
            content: [
                {
                    text: "Home",
                    page: "documentation.structures.home"
                }
            ]
        }
    ]
};

// write header
function generate_header(text) {
    // build code
    return ("<div class=\"page_document_text_header\">" + text + "</div>");
}

// write text
function generate_text(text) {
    // build code
    return ("<div class=\"page_document_text\">" + text + "</div>");
}

// write code block
function generate_code_block(text) {
    // build code
    return ("<div class=\"page_document_code_block_container\"><div class=\"page_document_code_block\"><pre class=\"page_document_code_block_pre\">" + text + "</pre></div></div>");
}

// write external link
function generate_external_link(text, link) {
    // build code
    return ("<div class=\"page_document_text\"><a class=\"page_document_link\" href=\"" + link + "\">" + text + "</a></div>");
}

// write side navigation link
function generate_side_link(text, link) {
    // build code
    return ("<div class=\"page_side_navigation_link\" onclick=\"goto_page('" + link + "')\">" + text + "</div>");
}

// write top navigation link
function generate_top_link(text, link) {
    // build code
    return ("<div class=\"page_top_link\" onclick=\"goto_page('" + link + "')\">" + text + "</div>");
}

// write internal image
function generate_internal_image(link) {
    // build code
    return ("<div class=\"page_document_text\"><img class=\"page_document_image\"src=\"" + link + "\"></img></div>");
}

// write internal video
function generate_internal_video(link) {
    // build code
    return ("<div class=\"page_document_text\"><video class=\"page_document_video\"src=\"" + link + "\"controls></video></div>");
}

// generate main document
function generate_document(json) {
    var output = "";
    var current_content;

    // write pieces in order
    for (var i = 0; i < json.content.length; i++) {
        // get content
        current_content = json.content[i];

        // write html
        switch (current_content.type) {
        case "header":
            output += generate_header(current_content.data);

            break;
        case "text":
            output += generate_text(current_content.data);

            break;
        case "code_block":
            output += generate_code_block(current_content.data);

            break;
        case "external_link":
            output += generate_external_link(current_content.data, current_content.link);

            break;
        case "internal_image":
            output += generate_internal_image(current_content.link);

            break;
        case "internal_video":
            output += generate_internal_video(current_content.link);
    
            break;
        }
    }

    return output;
}

// generate top navigation
function generate_top_links(json) {
    var output = "";

    // write pieces in order
    for (var i = 0; i < json.content.length; i++) {
        // get content
        output += generate_top_link(json.content[i].text, json.content[i].page);
    }

    return output;
}

// generate top navigation
function generate_side_links(json) {
    var output = "";

    // write pieces in order
    for (var i = 0; i < json.content.length; i++) {
        // get content
        output += generate_side_link(json.content[i].text, json.content[i].page);
    }

    return output;
}

// search for a page by name in the site json
function search_for_page(json, name) {
    // search for page
    for (var i = 0; i < json.pages.length; i++) {
        // check if correct page
        if (json.pages[i].name == name) {
            // return correct page
            return json.pages[i];
        }
    }

    // page not found
    return json.pages[0];
}

// search for a top link set by name in the site json
function search_for_top_link_set(json, name) {
    // search for page
    for (var i = 0; i < json.top_links.length; i++) {
        // check if correct page
        if (json.top_links[i].name == name) {
            // return correct page
            return json.top_links[i];
        }
    }

    // page not found
    return json.top_links[0];
}

// search for a left link set by name in the site json
function search_for_left_link_set(json, name) {
    // search for page
    for (var i = 0; i < json.left_links.length; i++) {
        // check if correct page
        if (json.left_links[i].name == name) {
            // return correct page
            return json.left_links[i];
        }
    }

    // page not found
    return json.left_links[0];
}

// set the page body and navigation to fit the user's request
function goto_page(page_name) {
    var page_document_div = document.getElementById("page_document_container");
    var page_top_links_div = document.getElementById("page_top_links");
    var page_left_links_div = document.getElementById("page_left_links");
    var page_json;
    var page_json_top_links;
    var page_json_left_links;

    // get page json data
    page_json = search_for_page(site_json, page_name);
    page_json_top_links = search_for_top_link_set(site_json, page_json.top_links);
    page_json_left_links = search_for_left_link_set(site_json, page_json.left_links);

    // setup page document contents to requested information
    page_document_div.innerHTML = generate_document(page_json);
    page_top_links_div.innerHTML = generate_top_links(page_json_top_links);
    page_left_links_div.innerHTML = generate_side_links(page_json_left_links);
    
    return;
}
