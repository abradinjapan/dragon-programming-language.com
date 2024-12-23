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
                }
            ]
        },
        {
            name: "about",
            top_links: "normal",
            left_links: "tutorial",
            content: [
                {
                    type: "header",
                    data: "The Dragon Programming Language"
                },
                {
                    type: "text",
                    data: "The Dragon Programming Language is a language prototype designed for creating compilers."
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
                    data: "Dragon is an interpreted language designed for compiler development. Although, currently there are more general language features available than there are specifically compiler generating features. Most of which are in another repository other than the main Dragon repository."
                },
                {
                    type: "code_block",
                    data: "function_call_name(inputs)(outputs)"
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
                    text: "About",
                    page: "about",
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
    return ("<div class=\"page_document_code_block\"><pre>" + text + "</pre></div>");
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
