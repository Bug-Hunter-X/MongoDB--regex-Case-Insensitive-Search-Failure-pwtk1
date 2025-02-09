```javascript
const query = {
  field: { $regex: /pattern/i },
};

// ... later in the code ...

const result = await collection.find(query).toArray();
```