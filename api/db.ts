const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter);

interface ProductCategory {
  id: number;
  categoryName: string;
  imageUrl: string;
  isSelected?: boolean;
};

interface User {
  email: string;
  password: string;
  age: number;
  firstname: string;
  lastname: string;
  address: string;
  pinCode: string;
  country: string;
  selectedCategories: ProductCategory[];
};

interface DatabaseDefaults {
  productCategories: ProductCategory[];
  users: User[];
}

const dbDefault: DatabaseDefaults = { 
  productCategories: [
    { id: 1, categoryName: 'Baby', imageUrl: '' },
    { id: 2, categoryName: 'Beauty', imageUrl: '' },
    { id: 3, categoryName: 'Pets', imageUrl: '' },
  ], 
  users: []
}

db.defaults(dbDefault).write();

export default db;