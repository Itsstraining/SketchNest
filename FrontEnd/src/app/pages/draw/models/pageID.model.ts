import { from } from 'rxjs';
import { RoomListComponent } from '../../lobby/room-list/room-list.component';
import { Room } from '../../lobby/room/models/room.model';

export interface PageID {
  id: Room['id'];
}
