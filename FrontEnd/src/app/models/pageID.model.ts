import { from } from 'rxjs';
import { RoomListComponent } from '../pages/lobby/room-list/room-list.component';
import { Room } from '../pages/lobby/room/models/room.model';

export interface PageID {
  name: Room['name'];
}
