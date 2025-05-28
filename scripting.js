let website;

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
                },
                {
                    type: "header",
                    data: "Dragon Official AI Generated Theme Song"
                },
                {
                    type: "external_link",
                    data: "To the depths of the dragon's mind...",
                    link: "https://suno.com/song/5e9e2422-d22b-41c7-9f31-c97e2235755e"
                }
            ]
        },
        {
            name: "welcome.home",
            top_links: "normal",
            left_links: "empty",
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
                    data: "The goal of the Dragon programming language is for its users to be able to generate compilers & interpreters robustly and easily."
                },
                {
                    type: "text",
                    data: "This website will contain the documentation of Dragon. Including: how the language is designed internally, the syntax, the built in functions and structures, as well as some tutorials on how to use said features."
                },
                {
                    type: "text",
                    data: "Click any of the top links to get started on your Dragon filled adventure!"
                },
                {
                    type: "header",
                    data: "WARNING"
                },
                {
                    type: "text",
                    data: "Dragon is currently in development. Meaning features can become deprecated and undocumented at any time. Reading the compiler code may be necessary in some cases. You have be warned."
                }
            ]
        },
        {
            name: "tutorial.fundamental_principles",
            top_links: "normal",
            left_links: "tutorial",
            content: [
                {
                    type: "header",
                    data: "What is Dragon at it's core?"
                },
                {
                    type: "text",
                    data: "The Dragon programming language is a compiled and interpreted programming langauge where the intepreter calls the compiler to build binary code and then calls the interpreter, from the current interpreter program, to run said binary code."
                },
                {
                    type: "text",
                    data: "What does this mean?"
                },
                {
                    type: "text",
                    data: "This means that you can use code to compile, debug, generate and execute other code. All in the same program."
                },
                {
                    type: "header",
                    data: "Unfortunately"
                },
                {
                    type: "text",
                    data: "The tutorial is yet to be fully written because the language is still being developed. However the structures and function calls are (mostly) documented in the site's top links. There you can find information about specific dragon features."
                }
            ]
        },
        {
            name: "tutorial.basics",
            top_links: "normal",
            left_links: "tutorial",
            content: [
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
                    data: "Dragon syntax is broken down into a few different things: Comments, Names, Namespaces, Strings, Statements, Structures and Functions."
                },
                {
                    type: "header",
                    data: "Comments"
                },
                {
                    type: "text",
                    data: "There is only one type of comment and that is the multiline comment."
                },
                {
                    type: "text",
                    data: "The multiline comment starts with a left square bracket and ends with a right square bracket."
                },
                {
                    type: "text",
                    data: "Comments can also nest, meaning you can have comments inside other comments. This is useful for example when you want to comment out a function but don't want to either mess with each individual line of code or delete other multiline comments inside the function."
                },
                {
                    type: "text",
                    data: "Example:"
                },
                {
                    type: "code_block",
                    data: "[ comment start! [ Hey! I'm [ a nested ] comment! ] [ oof! ] ]"
                },
                {
                    type: "header",
                    data: "Names"
                },
                {
                    type: "text",
                    data: "Names are the unit of namespaces. They are what you use to navigate to which variable name or structure member you want to access."
                },
                {
                    type: "text",
                    data: "Unlike many other languages, dots are actually just a part of the name. Underscores, uppercase letters, lowercase letters and decimal digits are also all fair game. Otherwise, there is no forced convention on how you name things (except for compiler internal naming)."
                },
                {
                    type: "text",
                    data: "It should be emphasized that ANY combination of those characters are valid names. So here is a list of names for a good idea about what I'm talking about."
                },
                {
                    type: "code_block",
                    data: "function.name\n__FUNCTION__\n_.name._\n0\n0.0.34...305432\n0........1\ndragon.run_program.0_9\n0123456789"
                },
                {
                    type: "text",
                    data: "You may have noticed that numbers can also be names, which is correct. It should be noted that there is a way to insert hard coded data in a specific function shown later. For now just bear in mind syntactically numbers are written using names."
                },
                {
                    type: "text",
                    data: "Also, here is the regex for you smart cookies out there."
                },
                {
                    type: "code_block",
                    data: "[a-zA-Z0-9_.]+"
                },
                {
                    type: "header",
                    data: "Namespaces"
                },
                {
                    type: "text",
                    data: "Namespaces are exactly what they sound like. They are the way that you interact with variables and structures in order to operate on data."
                },
                {
                    type: "text",
                    data: "Syntactically, namespaces are just names separated with colons (one colon, not two).\nFor example:"
                },
                {
                    type: "code_block",
                    data: "root_name:member_name:member_name:desired_variable"
                },
                {
                    type: "text",
                    data: "There is nothing really to note other than that. Onwards!"
                },
                {
                    type: "header",
                    data: "Strings"
                },
                {
                    type: "text",
                    data: "Strings are exactly what they sound like, a block of text surrounded by two double quotes (\"\") with escape sequences. The only difference being that special characters are not inserted using backslashes, they're inserted by a raw one byte hexadecimal value."
                },
                {
                    type: "text",
                    data: "Data is inserted using a modulous sign, exactly two hexadecimal characters (upper or lower case ok) and finally one semi-colon.\nFor example:"
                },
                {
                    type: "code_block",
                    data: "\"This is a string with one newline character -> %0a;\"\n\"How about four new lines! -> %0a;%0a;%0a;%0a;\""
                },
                {
                    type: "text",
                    data: "Do note that any utf-8 characters are also allowed, no escape code necessary just insert them like normal text."
                },
                {
                    type: "header",
                    data: "Statements"
                },
                {
                    type: "text",
                    data: "This is where things get interesting. There are three types of statements in Dragon: Dragon calls, offsets and scopes."
                },
                {
                    type: "text",
                    data: "There are no math expressions. No dedicated variable declaration syntax (like 'X = Y()'). No dedicated array indexing syntax (like 'array[X]'). And many more things that dragon doesn't have."
                },
                {
                    type: "text",
                    data: "But, there are still valid ways to write functional and robust code through the dragon syntax. Starting with the dragon call."
                },
                {
                    type: "header",
                    data: "Dragon Calls"
                },
                {
                    type: "text",
                    data: "Dragon calls are the core of dragon syntax. They're very simple yet robust. Dragon calls are composed of three things: A name (not namespace) of the dragon function being called, zero or more input arguments & zero or more output arguments."
                },
                {
                    type: "code_block",
                    data: "function_call_name(input_0, input_1, etc)(output_0, output_1, etc)"
                },
                {
                    type: "text",
                    data: "They can declare variables, operate on data, manage function control flow, call functions and more."
                },
                {
                    type: "text",
                    data: "Declaring vari"
                },
                {
                    type: "text",
                    data: "You MUST have both sets of arguments, even if they are empty."
                },
                {
                    type: "code_block",
                    data: "[ valid ]\ndragon_call()()\n\n[ invalid ]not_dragon_call() ]"
                },
                {
                    type: "text",
                    data: "There are also no semicolons at the end of a dragon call!"
                },
                {
                    type: "text",
                    data: "Variables in dragon are either declared or reused by writing their name in the output arguments of a Dragon call. This means that if a variable is already declared and is the correct type, it will be overwritten. If it is undeclared, it is declared there in the arguments with the name you give it and the type based on it's position in the function call. And if it's already taken with a different type, the compiler will inform you of the issue before the code can be run."
                },
                {
                    type: "header",
                    data: "Offsets"
                },
                {
                    type: "text",
                    data: "Offsets are points that the execution will jump to. They're basically labels, but with a different syntax."
                },
                {
                    type: "text",
                    data: "Offset syntax is simple, it is an '@' symbol followed by the offset name."
                },
                {
                    type: "text",
                    data: "Example:"
                },
                {
                    type: "code_block",
                    data: "@offset_name"
                },
                {
                    type: "text",
                    data: "Finally, scopes start with an offset name which acts as the name of the scope, all scopes must have a name. Then a !dragon.cell variable must be directly afterwards which acts as a boolean for whether or not the statements inside the scope will execute. Lastly an equals sign and curly brackets to surround your scope must be included."
                },
                {
                    type: "text",
                    data: "Examples:"
                },
                {
                    type: "code_block",
                    data: "@scope_name condition = { [ code inside scope here... ] }"
                },
                {
                    type: "code_block",
                    data: "@dragon.should_fly dragon:ready = {\n\t[ take off ]\n\tdragon.spread_wings(dragon)(wings_ready)\n\n\t[ check for broken wing ]\n\t@dragon.can_fly wings_ready = {\n\t\t[ you get the idea... ]\n\t}\n}"
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
                    data: "An argument in a function declaration must have exactly one name and exactly one type denoted by an exclamation point."
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
                    data: "!dragon.list\n(\n\tallocation !dragon.buffer,\n\tlength !dragon.cell,\n\tincrease !dragon.cell\n)"
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
                },
                {
                    type: "header",
                    data: "!dragon.text.location"
                },
                {
                    type: "text",
                    data: "The dragon text location structure is for locating bytes and lines inside of loaded buffers used by the compiler and available to the user. There are three primary components:"
                },
                {
                    type: "code_block",
                    data: "!dragon.text.location\n(\n\tfile_index !dragon.cell,\n\tline_number !dragon.cell,\n\tcharacter_index !dragon.cell\n)"
                },
                {
                    type: "text",
                    data: "First is the 'file_index', which is intended for use where you have a buffer of loaded files and you want to specify which buffer is being talked about by index.\nSecond is the 'line_number', self-explanitory.\nAnd finally is the 'character_index', which is the raw byte index into the buffer specified by 'file_index'."
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
                    data: "Apologies, but they are not yet implemented in dragon. :("
                }
            ]
        },
        {
            name: "documentation.function_calls.print.character",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.print.character",
                        inputs: [ "character !dragon.cell" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function prints the first byte from a cell to the console." }
            ]
        },
        {
            name: "documentation.function_calls.print.buffer_as_string",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.print.buffer_as_string",
                        inputs: [ "character !dragon.cell" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function prints the first byte from a cell to the console." }
            ]
        },
        {
            name: "documentation.function_calls.print.cell_as_binary",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.print.cell_as_binary",
                        inputs: [ "cell !dragon.cell" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function prints the full 64 bits of a cell to the console." }
            ]
        },
        {
            name: "documentation.function_calls.print.new_line",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.print.new_line",
                        inputs: [],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function prints one new line to the console." }
            ]
        },
        {
            name: "documentation.function_calls.print.tabs",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.print.tabs",
                        inputs: [ "tab_count !dragon.cell" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function print the specified amount of tabs (ascii: 0x09)." }
            ]
        },
        {
            name: "documentation.function_calls.copy",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.copy",
                        inputs: [ "any_variable !(any_type)" ],
                        outputs: [ "any_variable !(any_type)" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function copies one of any variable to one of equivalent type." }
            ]
        },
        {
            name: "documentation.function_calls.pack",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.pack",
                        inputs: [ "structure_member_1 !(any_type)", "structure_member_2 !(any_type)", "...", "structure_member_N !(any_type)" ],
                        outputs: [ "destination !(designated_type)" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function is used to 'pack' variables into one type of variable." },
                { type: "text", data: "The inputs should contain the correct amount, the correct types and be in order of the type specified." },
                { type: "text", data: "The variable type and destination is the one variable in the outputs." },
                { type: "text", data: "'!(designated_type)' is the type you want the data to pack into." }
            ]
        },
        {
            name: "documentation.function_calls.pack.null",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.pack.null",
                        inputs: [],
                        outputs: [ "destination !(designated_type)" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function sets all cells of all members of a variable to be zero." },
                { type: "text", data: "'!(designated_type)' is the type you want the zeros to pack into." }
            ]
        },
        {
            name: "documentation.function_calls.jump",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.jump",
                        inputs: [ "condition !dragon.cell", "@offset_name" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function jumps to a specified offset in the current function." },
                { type: "text", data: "If the condition is zero, the function doesn't jump." },
                { type: "text", data: "If the condition is anything else, the function will jump." }
            ]
        },
        {
            name: "documentation.function_calls.jump.bottom",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.jump.bottom",
                        inputs: [ "condition !dragon.cell", "@named_scope_name" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function jumps to the instruction directly after a scope in the current function. It basically exits the scope." },
                { type: "text", data: "If the condition is zero, the function doesn't jump." },
                { type: "text", data: "If the condition is anything else, the function will jump." }
            ]
        },
        {
            name: "documentation.function_calls.jump.top",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.jump.top",
                        inputs: [ "condition !dragon.cell", "@named_scope_name" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function jumps to the conditional check of the specified named scope in the current function. AKA, it goes to the start." },
                { type: "text", data: "If the condition is zero, the function doesn't jump." },
                { type: "text", data: "If the condition is anything else, the function will jump." }
            ]
        },
        {
            name: "documentation.function_calls.bits.or",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.or",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does a binary or on two variables and returns the result." }
            ]
        },
        {
            name: "documentation.function_calls.bits.and",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.and",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does a binary and, and returns the result." }
            ]
        },
        {
            name: "documentation.function_calls.bits.xor",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.xor",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does a binary xor and returns the result." }
            ]
        },
        {
            name: "documentation.function_calls.bits.shift_higher",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.shift_higher",
                        inputs: [ "data !dragon.cell", "shift_by !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does a bit shift towards the higher bit values." }
            ]
        },
        {
            name: "documentation.function_calls.bits.shift_lower",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.shift_lower",
                        inputs: [ "data !dragon.cell", "shift_by !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does a bit shift towards the lower bit values." }
            ]
        },
        {
            name: "documentation.function_calls.bits.overwrite",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.overwrite",
                        inputs: [ "mask !dragon.cell", "old_bits !dragon.cell", "new_bits !dragon.cell" ],
                        outputs: [ "result !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function only copies the bits from the old cell to the new cell that are set to true in the mask." }
            ]
        },
        {
            name: "documentation.function_calls.bits.invert",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.bits.invert",
                        inputs: [ "source !dragon.cell" ],
                        outputs: [ "destination !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function inverts all the bits in one cell." }
            ]
        },
        {
            name: "documentation.function_calls.integer.add",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.add",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "output !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function adds two integers." }
            ]
        },
        {
            name: "documentation.function_calls.integer.subtract",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.subtract",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "output !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function subtracts two integers." }
            ]
        },
        {
            name: "documentation.function_calls.integer.multiply",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.multiply",
                        inputs: [ "a !dragon.cell", "b !dragon.cell" ],
                        outputs: [ "output !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function multiplies two integers." }
            ]
        },
        {
            name: "documentation.function_calls.integer.divide",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.divide",
                        inputs: [ "numerator !dragon.cell", "denominator !dragon.cell" ],
                        outputs: [ "output !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function divides two integers." }
            ]
        },
        {
            name: "documentation.function_calls.integer.modulous",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.modulous",
                        inputs: [ "value !dragon.cell", "mod_by !dragon.cell" ],
                        outputs: [ "remainder !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function does an integer modulous." }
            ]
        },
        {
            name: "documentation.function_calls.integer.within_range",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.integer.within_range",
                        inputs: [ "lower_bound !dragon.cell", "value !dragon.cell", "upper_bound !dragon.cell", "invert !dragon.cell" ],
                        outputs: [ "output_boolean !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function checks whether or not an integer (value) is within the range specified." },
                { type: "text", data: "(lower_bound <= value) && (value <= upper_bound)." },
                { type: "text", data: "'invert' will invert 'output_boolean' if not zero." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.request",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer.request",
                        inputs: [ "size !dragon.cell" ],
                        outputs: [ "buffer !dragon.buffer" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function will attempt to allocate a buffer of 'size' and store it in 'buffer'." },
                { type: "text", data: "If the allocation fails, the buffer addresses will both be zero." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.return",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer.return",
                        inputs: [ "buffer !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function deallocates a buffer." },
                { type: "text", data: "NOTE: The buffer given must contain the full allocation with both original pointers in order to be deallocated!" }
            ]
        },
        {
            name: "documentation.function_calls.buffer.calculate.length",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer.calculate.length",
                        inputs: [ "buffer !dragon.buffer" ],
                        outputs: [ "length !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function returns the length of a given buffer." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.calculate.end_address",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.calculate.end_address",
                        inputs: [ "start !dragon.cell", "length !dragon.cell" ],
                        outputs: [ "end !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a buffer start address and a buffer length and calculates the ending address." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.calculate.start_address",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.calculate.start_address",
                        inputs: [ "length !dragon.cell", "end !dragon.cell" ],
                        outputs: [ "start !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a buffer length and a buffer end address and calculates the starting address." }
            ]
        },
        {
            name: "documentation.function_calls.address_to_cell",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.address_to_cell",
                        inputs: [ "address !dragon.cell", "byte_count !dragon.cell" ],
                        outputs: [ "cell !dragon.cell", "advancement !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a pointer and a byte count (max is 8) and reads that into a variable." },
                { type: "text", data: "'advancement' is the following address after the read is done. Not really necessary, just convenient." }
            ]
        },
        {
            name: "documentation.function_calls.cell_to_address",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.cell_to_address",
                        inputs: [ "cell !dragon.cell", "byte_count !dragon.cell", "address !dragon.cell" ],
                        outputs: [ "advancement !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a cell and writes 'byte_count' amount of bytes (max of 8) to the specified 'address'." },
                { type: "text", data: "'advancement' is the following address after the write is done." }
            ]
        },
        {
            name: "documentation.function_calls.file_to_buffer",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.file_to_buffer",
                        inputs: [ "file_path !dragon.buffer" ],
                        outputs: [ "file_data !dragon.buffer" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a file path, finds a file and gets all of it's contents into a single buffer." },
                { type: "text", data: "The buffer will be zeroed upon failure and appending a null to the string isn't necessary as the language will do it for you when this instruction is called." }
            ]
        },
        {
            name: "documentation.function_calls.buffer_to_file",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer_to_file",
                        inputs: [ "file_data !dragon.buffer", "file_path !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a buffer and creates / remakes a file with said buffer. The original file is deleted and the new one replaces it." },
                { type: "text", data: "Appending a null to the string isn't necessary as the language will do it for you when this instruction is called." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.copy.low_to_high",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer.copy.low_to_high",
                        inputs: [ "source !dragon.buffer", "destination !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function copies a buffer from the lowest address to the highest address. Please note that both buffers need to be allocated and MUST be the exact same length." }
            ]
        },
        {
            name: "documentation.function_calls.buffer.copy.high_to_low",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer.copy.high_to_low",
                        inputs: [ "source !dragon.buffer", "destination !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function copies a buffer from the highest address to the lowest address. Please note that both buffers need to be allocated and MUST be the exact same length." }
            ]
        },
        {
            name: "documentation.function_calls.delete_file",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.delete_file",
                        inputs: [ "file_path !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function deletes a file from a given file path. Please note that appending null to the file path string is taken care of for you in this instruction." }
            ]
        },
        {
            name: "documentation.function_calls.current.within_range",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.current.within_range",
                        inputs: [ "current !dragon.current", "invert !dragon.cell" ],
                        outputs: [ "boolean !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a current structure and check whether or not its valid or not. 'invert' inverts the resulting flag if not set to zero. 'boolean' is the resulting boolean." }
            ]
        },
        {
            name: "documentation.function_calls.structure_to_buffer",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.structure_to_buffer",
                        inputs: [ "structure ![any_type]", "destination_buffer !dragon.buffer" ],
                        outputs: [ "advancement !dragn.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a structure of any type and writes it to a buffer. Please note that the buffer's size MUST match the size in bytes of the given structure." }
            ]
        },
        {
            name: "documentation.function_calls.buffer_to_structure",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.buffer_to_structure",
                        inputs: [ "buffer !dragon.buffer" ],
                        outputs: [ "structure ![any_type]" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a buffer and makes a structure of a specified type. Please note that the buffer's size MUST match the size in bytes of the given structure." }
            ]
        },
        {
            name: "documentation.function_calls.structure.byte_size",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.structure.byte_size",
                        inputs: [ "structure ![any_type]" ],
                        outputs: [ "byte_size !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes any structure and returns its size in bytes." }
            ]
        },
        {
            name: "documentation.function_calls.list.open",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.list.open",
                        inputs: [ "increase !dragon.cell" ],
                        outputs: [ "list !dragon.list" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a byte length (increase) and opens a list starting at that size." }
            ]
        },
        {
            name: "documentation.function_calls.list.close",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.list.close",
                        inputs: [ "list !dragon.list" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function deallocates and closes a list." }
            ]
        },
        {
            name: "documentation.function_calls.list.calculate.content_buffer",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.list.calculate.content_buffer",
                        inputs: [ "list !dragon.list" ],
                        outputs: [ "content_buffer !dragon.buffer" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a list and returns a buffer that points the the start of the list up to the fill point." }
            ]
        },
        {
            name: "documentation.function_calls.list.append.structure",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.list.append.structure",
                        inputs: [ "list !dragon.list", "structure ![any_type]" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a list and appends a structure to the end of it." }
            ]
        },
        {
            name: "documentation.function_calls.list.append.buffer",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.list.append.buffer",
                        inputs: [ "list !dragon.list", "data !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function appends the contents of a buffer to the end of list." }
            ]
        },
        {
            name: "documentation.function_calls.compiler.compile",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.compiler.compile",
                        inputs: [ "code_buffers_buffer !dragon.buffer", "debug_enabled !dragon.cell", "generate_kickstarter !dragon.cell" ],
                        outputs: [ "anvil_program !dragon.buffer", "debug_information !dragon.buffer", "error_occured !dragon.cell", "error_message !dragon.buffer", "error_location_file_index !dragon.cell", "error_location_line_number !dragon.cell", "error_location_character_index !dragon.cell" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function takes a buffer of buffers, along with a few settings, and compiles dragon code to anvil binary code. It also returns some error information." }
            ]
        },
        {
            name: "documentation.function_calls.context.open",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.context.open",
                        inputs: [],
                        outputs: [ "context !dragon.buffer" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function allocates a new context." }
            ]
        },
        {
            name: "documentation.function_calls.context.install_program",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.context.install_program",
                        inputs: [ "context !dragon.buffer", "program !dragon.buffer" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function sets up an anvil program in the desired context." }
            ]
        },
        {
            name: "documentation.function_calls.context.run",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.context.run",
                        inputs: [ "context !dragon.buffer", "instruction_run_count !dragon.cell" ],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function will run a specified amount of instructions pertaining the the installed program in the given context. To run forever, pass -1 (dragon.integer.n1)." }
            ]
        },
        {
            name: "documentation.function_calls.time.now",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.time.now",
                        inputs: [],
                        outputs: [ "time !dragon.time" ],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function returns the current time." }
            ]
        },
        {
            name: "documentation.function_calls.",
            top_links: "normal",
            left_links: "documentation.functions",
            content: [
                { type: "header", data: "Valid Configurations" },
                {
                    type: "function_documentation",
                    data: {
                        name: "dragon.",
                        inputs: [],
                        outputs: [],
                    }
                },
                { type: "header", data: "Description" },
                { type: "text", data: "This function" }
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
                    text: "Welcome!",
                    page: "welcome.home"
                },
                {
                    text: "Tutorial",
                    page: "tutorial.fundamental_principles",
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
                    text: "Dragon's Core",
                    page: "tutorial.fundamental_principles"
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
                    text: "dragon.set",
                    page: "documentation.function_calls.set"
                },
                {
                    text: "dragon.print.character",
                    page: "documentation.function_calls.print.character"
                },
                {
                    text: "dragon.print.buffer_as_string",
                    page: "documentation.function_calls.print.buffer_as_string"
                },
                {
                    text: "dragon.print.cell_as_binary",
                    page: "documentation.function_calls.print.cell_as_binary"
                },
                {
                    text: "dragon.print.new_line",
                    page: "documentation.function_calls.print.new_line"
                },
                {
                    text: "dragon.print.tabs",
                    page: "documentation.function_calls.print.tabs"
                },
                {
                    text: "dragon.copy",
                    page: "documentation.function_calls.copy"
                },
                {
                    text: "dragon.pack",
                    page: "documentation.function_calls.pack"
                },
                {
                    text: "dragon.pack.null",
                    page: "documentation.function_calls.pack.null"
                },
                {
                    text: "dragon.jump",
                    page: "documentation.function_calls.jump"
                },
                {
                    text: "dragon.jump.bottom",
                    page: "documentation.function_calls.jump.bottom"
                },
                {
                    text: "dragon.jump.top",
                    page: "documentation.function_calls.jump.top"
                },
                {
                    text: "dragon.bits.or",
                    page: "documentation.function_calls.bits.or"
                },
                {
                    text: "dragon.bits.and",
                    page: "documentation.function_calls.bits.and"
                },
                {
                    text: "dragon.bits.xor",
                    page: "documentation.function_calls.bits.xor"
                },
                {
                    text: "dragon.bits.shift_higher",
                    page: "documentation.function_calls.bits.shift_higher"
                },
                {
                    text: "dragon.bits.shift_lower",
                    page: "documentation.function_calls.bits.shift_lower"
                },
                {
                    text: "dragon.bits.invert",
                    page: "documentation.function_calls.bits.invert"
                },
                {
                    text: "dragon.bits.overwrite",
                    page: "documentation.function_calls.bits.overwrite"
                },
                {
                    text: "dragon.integer.add",
                    page: "documentation.function_calls.integer.add"
                },
                {
                    text: "dragon.integer.subtract",
                    page: "documentation.function_calls.integer.subtract"
                },
                {
                    text: "dragon.integer.multiply",
                    page: "documentation.function_calls.integer.multiply"
                },
                {
                    text: "dragon.integer.divide",
                    page: "documentation.function_calls.integer.divide"
                },
                {
                    text: "dragon.integer.modulous",
                    page: "documentation.function_calls.integer.modulous"
                },
                {
                    text: "dragon.integer.within_range",
                    page: "documentation.function_calls.integer.within_range"
                },
                {
                    text: "dragon.buffer.request",
                    page: "documentation.function_calls.buffer.request"
                },
                {
                    text: "dragon.buffer.return",
                    page: "documentation.function_calls.buffer.return"
                },
                {
                    text: "dragon.buffer.calculate.length",
                    page: "documentation.function_calls.buffer.calculate.length"
                },
                {
                    text: "dragon.buffer.calculate.end_address",
                    page: "documentation.function_calls.buffer.calculate.end_address"
                },
                {
                    text: "dragon.buffer.calculate.start_address",
                    page: "documentation.function_calls.buffer.calculate.start_address"
                },
                {
                    text: "dragon.address_to_cell",
                    page: "documentation.function_calls.address_to_cell"
                },
                {
                    text: "dragon.cell_to_address",
                    page: "documentation.function_calls.cell_to_address"
                },
                {
                    text: "dragon.file_to_buffer",
                    page: "documentation.function_calls.file_to_buffer"
                },
                {
                    text: "dragon.buffer_to_file",
                    page: "documentation.function_calls.buffer_to_file"
                },
                {
                    text: "dragon.buffer.copy.low_to_high",
                    page: "documentation.function_calls.buffer.copy.low_to_high"
                },
                {
                    text: "dragon.buffer.copy.high_to_low",
                    page: "documentation.function_calls.buffer.copy.high_to_low"
                },
                {
                    text: "dragon.delete_file",
                    page: "documentation.function_calls.delete_file"
                },
                {
                    text: "dragon.current.within_range",
                    page: "documentation.function_calls.current.within_range"
                },
                {
                    text: "dragon.structure_to_buffer",
                    page: "documentation.function_calls.structure_to_buffer"
                },
                {
                    text: "dragon.buffer_to_structure",
                    page: "documentation.function_calls.buffer_to_structure"
                },
                {
                    text: "dragon.structure.byte_size",
                    page: "documentation.function_calls.structure.byte_size"
                },
                {
                    text: "dragon.list.open",
                    page: "documentation.function_calls.list.open"
                },
                {
                    text: "dragon.list.close",
                    page: "documentation.function_calls.list.close"
                },
                {
                    text: "dragon.list.calculate.content_buffer",
                    page: "documentation.function_calls.list.calculate.content_buffer"
                },
                {
                    text: "dragon.list.append.structure",
                    page: "documentation.function_calls.list.append.structure"
                },
                {
                    text: "dragon.list.append.buffer",
                    page: "documentation.function_calls.list.append.buffer"
                },
                {
                    text: "dragon.compiler.compile",
                    page: "documentation.function_calls.compiler.compile"
                },
                {
                    text: "dragon.context.open",
                    page: "documentation.function_calls.context.open"
                },
                {
                    text: "dragon.context.install_program",
                    page: "documentation.function_calls.context.install_program"
                },
                {
                    text: "dragon.context.run",
                    page: "documentation.function_calls.context.run"
                },
                {
                    text: "dragon.time.now",
                    page: "documentation.function_calls.time.now"
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

/*// write multiple types
function generate_types(type_array) {
    // build code
    output = ""

    // check for types count
    if (type_array.length > 0) { 
        // build each slot
        for (let type_index = 0; type_index < type_array.length; type_index++) {
            output += generate_text(type_array[type_index]);
        }
    // no types
    } else {
        output = generate_text("[ none ]");
    }

    return output;
} */

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

function generate_dragon_function_call_arguments(arguments) {
    // setup output
    text = "(";

    // for each argument
    for (let index = 0; index < arguments.length; index++) {
        // check for comma
        if (index > 0) {
            // add comma
            text += ", ";
        }

        // add argument
        text += arguments[index];
    }

    // append closing bracket
    text += ")";

    return text;
}

// write a dragon function call
function generate_dragon_function_call(json_data) {
    // setup text
    text = "";

    // write name
    text += json_data.name;

    // write arguments
    text += generate_dragon_function_call_arguments(json_data.inputs);
    text += generate_dragon_function_call_arguments(json_data.outputs);

    // assemble and return code
    return generate_code_block(text);
}

// generate main document
function generate_main_text(content) {
    var output = "";
    var current_content;

    // write pieces in order
    for (var i = 0; i < content.length; i++) {
        // get content
        current_content = content[i];

        // write html
        switch (current_content.type) {
        case "header":
            output += generate_header(current_content.data);

            break;
        case "text":
            output += generate_text(current_content.data);

            break;
        case "function_documentation":
            output += generate_dragon_function_call(current_content.data);

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

// generate website
function generate_document(json) {
    return generate_main_text(json.content);
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
