import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Settings {
  public defaultAccuracyThreshold = 5;
  public defaultTrilateration = 1;
  public accuracyThreshold;
  public trilateration;

  public save(): Promise<any> {
    return this.storage.set("accuracyThreshold", this.accuracyThreshold);
  }

  public load(): Promise<any> {
    return this.storage.get("accuracyThreshold")
      .then((x) => { this.accuracyThreshold = x === null ? this.defaultAccuracyThreshold : x; });
  }

  constructor(public storage: Storage) {

  }

}
