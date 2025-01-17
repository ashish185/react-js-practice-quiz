Here are some **commonly asked interview questions** about `sessionStorage` along with explanations and examples:
---
### **Interview Questions**

#### **1. What is `sessionStorage` in JavaScript?**
- `sessionStorage` is a Web Storage API that allows storing key-value pairs in a user's browser. The data is specific to a single tab or window and persists only until the tab or browser window is closed.

**Example**:
```javascript
sessionStorage.setItem("username", "JohnDoe");
console.log(sessionStorage.getItem("username")); // Output: "JohnDoe"
```
---
#### **2. How does `sessionStorage` differ from `localStorage`?**
- **Scope**:
  - `sessionStorage`: Data is tied to the session and is deleted when the browser tab or window is closed.
  - `localStorage`: Data persists even after the browser is closed.

- **Example**:
  ```javascript
  sessionStorage.setItem("sessionKey", "Session Data");
  localStorage.setItem("localKey", "Local Data");
  ```

---

#### **3. Can data in `sessionStorage` be shared between browser tabs or windows?**
- No, `sessionStorage` is unique to each tab or window. It cannot be accessed across tabs or windows, even if they belong to the same origin.

---

#### **4. How much data can `sessionStorage` hold?**
- `sessionStorage` typically allows up to **5MB** of storage per origin. This can vary slightly depending on the browser.

---

#### **5. How can you check if a key exists in `sessionStorage`?**
- Use the `sessionStorage.getItem(key)` method. If the key does not exist, it will return `null`.

**Example**:
```javascript
if (sessionStorage.getItem("username")) {
  console.log("Key exists");
} else {
  console.log("Key does not exist");
}
```

---

#### **6. What are some use cases for `sessionStorage`?**
- **Temporary data storage**:
  - Store user input temporarily (e.g., a partially filled form).
  - Persist data between page reloads in the same tab.
- **Session-specific settings**:
  - Store data relevant to a specific session, like filters or temporary configurations.

---

#### **7. How do you remove data from `sessionStorage`?**
- Use one of these methods:
  1. **Remove a specific item**:
     ```javascript
     sessionStorage.removeItem("username");
     ```
  2. **Clear all data**:
     ```javascript
     sessionStorage.clear();
     ```

---

#### **8. What will happen if you try to access `sessionStorage` in a private/incognito window?**
- `sessionStorage` works in private/incognito mode, but the data will be cleared as soon as the browser session (tab or window) ends.

---

#### **9. How can you store non-string data in `sessionStorage`?**
- `sessionStorage` only supports storing data as strings. Use `JSON.stringify` to store objects and `JSON.parse` to retrieve them.

**Example**:
```javascript
const user = { name: "John", age: 30 };
sessionStorage.setItem("user", JSON.stringify(user));

const retrievedUser = JSON.parse(sessionStorage.getItem("user"));
console.log(retrievedUser.name); // Output: "John"
```

---

#### **10. What are the limitations of `sessionStorage`?**
1. Limited to the session (tab/window scope).
2. Can only store strings (objects need serialization with `JSON.stringify`).
3. Limited storage size (typically 5MB).
4. Not suitable for highly sensitive data (no encryption by default).
5. Data is lost if the user closes the tab or refreshes the browser in incognito mode.

---

### **Example Usage**

#### Example: Storing and Retrieving Form Data
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>SessionStorage Example</title>
</head>
<body>
  <input type="text" id="name" placeholder="Enter your name" />
  <button id="save">Save</button>
  <button id="retrieve">Retrieve</button>
  <button id="clear">Clear</button>
  <script>
    const nameInput = document.getElementById("name");
    const saveButton = document.getElementById("save");
    const retrieveButton = document.getElementById("retrieve");
    const clearButton = document.getElementById("clear");

    saveButton.addEventListener("click", () => {
      sessionStorage.setItem("name", nameInput.value);
      alert("Name saved to sessionStorage!");
    });

    retrieveButton.addEventListener("click", () => {
      const savedName = sessionStorage.getItem("name");
      if (savedName) {
        alert(`Retrieved Name: ${savedName}`);
      } else {
        alert("No name found in sessionStorage.");
      }
    });

    clearButton.addEventListener("click", () => {
      sessionStorage.removeItem("name");
      alert("Name cleared from sessionStorage.");
    });
  </script>
</body>
</html>
```

---

### **Common Mistakes**
1. Forgetting that `sessionStorage` stores everything as strings.
2. Attempting to share `sessionStorage` data across tabs.
3. Overwriting existing data without proper checks.

By understanding these concepts and practicing with examples, you’ll be well-prepared for any `sessionStorage` interview question!