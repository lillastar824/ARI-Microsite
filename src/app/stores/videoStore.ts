import { IDBPDatabase, openDB } from 'idb';
import { makeAutoObservable } from 'mobx';
export default class VideoStore {
  private dbName: string;
  private db: any;

  constructor(dbName: string) {
    makeAutoObservable(this)
    this.dbName = dbName;
  }

  public async createObjectStore(tableNames: string[]) {
    try {
      this.db = await openDB(this.dbName, 1, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            if (db.objectStoreNames.contains(tableName)) {
              continue;
            }
            db.createObjectStore(tableName, { autoIncrement: true, keyPath: 'id' });
          }
        },
      });
    } catch (error) {
      return false;
    }
  }

  public async getValue(tableName: string, id: number) {
    const tx = this.db.transaction(tableName, 'readonly');
    const idbstore = tx.objectStore(tableName);
    const result = await idbstore.get(id);
    console.log('Get Data ', JSON.stringify(result));
    return result;
  }

  public async getValueByName(tableName: string, name: string) {
    const tx = this.db.transaction(tableName, 'readonly');
    const idbstore = tx.objectStore(tableName);
    const result = await idbstore.get(name);
    console.log('Get Data ', JSON.stringify(result));
    return result;
  }

  public async getAllValue(tableName: string) {
    const tx = this.db.transaction(tableName, 'readonly');
    const idbstore = tx.objectStore(tableName);
    const result = await idbstore.getAll();
    console.log('Get All Data', JSON.stringify(result));
    return result;
  }

  public async putValue(tableName: string, value: object) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const idbstore = tx.objectStore(tableName);
    const result = await idbstore.put(value);
    console.log('Put Data ', JSON.stringify(result));
    return result;
  }

  public async putBulkValue(tableName: string, values: object[]) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const idbstore = tx.objectStore(tableName);
    for (const value of values) {
      const result = await idbstore.put(value);
      console.log('Put Bulk Data ', JSON.stringify(result));
    }
    return this.getAllValue(tableName);
  }

  public async deleteValue(tableName: string, id: number) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const idbstore = tx.objectStore(tableName);
    const result = await idbstore.get(id);
    if (!result) {
      console.log('Id not found', id);
      return result;
    }
    await idbstore.delete(id);
    console.log('Deleted Data', id);
    return id;
  }
}