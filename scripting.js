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
                    data: "Dragon is a scripting language designed primarily for compiler development. Although the language still lacks many features, the base of the language is mainly fleshed out. And I wish to create a tutorial around it."
                },
                {
                    type: "header",
                    data: "Basic Syntax"
                },
                {
                    type: "text",
                    data: "Dragon has what I like to call a statement centered syntax. In other words, the syntax revolves around a type of statement. The dragon call."
                },
                {
                    type: "text",
                    data: "A dragon call is a very simple form of function call that has one name and two sets of arguments. They are called like so:"
                },
                {
                    type: "code_block",
                    data: "function_name(inputs)(outputs)"
                },
                {
                    type: "text",
                    data: "Names can be any combination of characters from the following regex:"
                },
                {
                    type: "code_block",
                    data: "[A-Za-z0-9_.]+"
                },
                {
                    type: "text",
                    data: "Both the input and output arguments can have zero or more arguments separated by commas."
                },
                {
                    type: "code_block",
                    data: "foo(a, b, c, d)()"
                }
            ]
        },
        {
            name: "documentation.home",
            top_links: "normal",
            left_links: "documentation",
            content: [
                {
                    type: "header",
                    data: "Documentation Home"
                },
                {
                    type: "text",
                    data: "Dragon's built in structures and functions."
                },
                {
                    type: "text",
                    data: "Search by selecting a link on the left side of the webpage."
                }
            ]
        },
        {
            name: "documentation.structures",
            top_links: "normal",
            left_links: "documentation",
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
                    text: "Documentation",
                    page: "documentation.home"
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
            name: "documentation",
            content: [
                {
                    text: "Home",
                    page: "documentation.home"
                },
                {
                    text: "Built In Structures",
                    page: "documentation.structures"
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
