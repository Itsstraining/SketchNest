import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public db: AngularFirestore) {}
  /**
   * Truyền vào user để lấy tham số cho document
   */
  result;
  public async GetData(email, id) {
    let data = await this.db
      .collection('user')
      .doc(email)
      .snapshotChanges()
      .subscribe((doc) => {
        this.result = doc.payload.data();
        for (let i of this.result.room) {
          if (i.id == 1) {
            
          }
        }
      });
  }
}
