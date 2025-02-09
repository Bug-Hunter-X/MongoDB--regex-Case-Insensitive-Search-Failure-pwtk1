```javascript
const query = {
  field: { $regex: /pattern/i },
};

// ... later in the code ...

const result = await collection.find(query).toArray();

//Correct way of doing this

const correctQuery = {
  field: { $regex: new RegExp(pattern, 'i') }
};

const correctResult = await collection.find(correctQuery).toArray();
```