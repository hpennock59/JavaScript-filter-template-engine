# JavaScript Filter & Template Engine (Group Project)

This repository contains a project completed for a university **Software Engineering** course. The project focuses on implementing core JavaScript concepts through two utilities: a multi-stage array filtering function and a template processing system.

The assignment was completed as a **group project** and demonstrates practical JavaScript concepts such as functions, callbacks, and working with objects and strings.

---

## Project Overview

The project implements two main JavaScript components.

### Multi-Filter Function

The `MakeMultiFilter` function creates a reusable filtering system for arrays. It allows multiple filter conditions to be applied one after another while keeping track of the filtered results internally.

Instead of filtering an array once, this function allows filters to be chained together. Each filter further narrows down the elements that remain in the array.

Example concept:

original array → apply filter → apply filter → return final result

Example usage:

const filter = MakeMultiFilter([1,2,3,4,5]);

filter(x => x > 2)
(x => x < 5)
(undefined);

Result:

[3,4]

Key characteristics of this implementation:

* Supports chaining multiple filter operations
* Keeps track of the filtered results internally
* Allows an optional callback after filtering
* Ensures the original array is not modified

---

### Template Processor

The `TemplateProcessor` constructor implements a simple template engine that replaces placeholders in a string with values from a dictionary object.

Placeholders are written using the following format:

{{property}}

The `fillIn()` method replaces each placeholder with the corresponding value from a provided dictionary.

Example:

Template:

"Hello {{name}}, welcome to {{school}}."

Dictionary:

{
name: "Hunter",
school: "UNCC"
}

Output:

"Hello Hunter, welcome to UNCC."

If a placeholder property does not exist in the dictionary object, it is replaced with an empty string.

---

## Academic Context

This repository contains work originally completed as part of a **group programming assignment for a university Software Engineering course**. It is shared here to demonstrate JavaScript programming and problem-solving skills developed during the course.
