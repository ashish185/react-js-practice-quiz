**Specificity** in the context of CSS refers to the mechanism by which browsers decide which CSS rule to apply when multiple rules could apply to the same element. It determines the weight or importance of a CSS selector, allowing browsers to choose the most specific rule for styling an element.

### How Specificity is Calculated
Specificity is calculated based on the types of selectors used in a CSS rule. It is often expressed as a four-part value (a, b, c, d):

1. **a - Inline Styles:** If the style is applied directly to an element via the `style` attribute in HTML, this has the highest specificity.
   - Example: `<div style="color: red;"></div>` has a specificity of `1, 0, 0, 0`.

2. **b - ID Selectors:** Selectors that use an ID have the next highest specificity.
   - Example: `#header { color: blue; }` has a specificity of `0, 1, 0, 0`.

3. **c - Class, Attribute, and Pseudo-Class Selectors:** These selectors have a lower specificity than ID selectors.
   - Example: `.nav { color: green; }`, `[type="text"] { font-size: 16px; }`, `:hover { color: yellow; }` all have a specificity of `0, 0, 1, 0`.

4. **d - Type Selectors (Element Selectors) and Pseudo-Elements:** These have the lowest specificity.
   - Example: `div { margin: 10px; }`, `h1 { font-size: 2em; }`, `::before { content: ''; }` have a specificity of `0, 0, 0, 1`.

### Examples of Specificity
Consider the following CSS rules:

```css
/* Rule 1 */
div p {
  color: black; /* Specificity: 0, 0, 0, 2 */
}

/* Rule 2 */
#content p {
  color: blue; /* Specificity: 0, 1, 0, 1 */
}

/* Rule 3 */
.content .paragraph {
  color: green; /* Specificity: 0, 0, 2, 0 */
}

/* Rule 4 */
p {
  color: red; /* Specificity: 0, 0, 0, 1 */
}
```

- **Rule 4** (`p { color: red; }`) has the lowest specificity.
- **Rule 1** (`div p { color: black; }`) has higher specificity than Rule 4.
- **Rule 3** (`.content .paragraph { color: green; }`) has a higher specificity than both Rule 1 and Rule 4.
- **Rule 2** (`#content p { color: blue; }`) has the highest specificity and will be applied over the others.

### How Specificity Affects CSS Rules
When multiple rules could apply to an element, the rule with the highest specificity wins. If two rules have the same specificity, the one that comes last in the CSS (the one that appears last in the stylesheet) will be applied.

### Important Points:
- **`!important`**: This declaration can override any specificities, making the rule it’s applied to the highest priority.
- **Avoiding Specificity Wars**: It’s generally recommended to keep specificity low to maintain simple and manageable stylesheets. Overly specific selectors can make your CSS difficult to maintain and override.

Understanding and managing specificity is crucial for writing efficient and predictable CSS, ensuring that styles are applied exactly as intended.