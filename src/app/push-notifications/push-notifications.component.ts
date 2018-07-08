import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  // moduleId: module.id,
  selector: 'app-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.css']
})
export class PushNotificationsComponent implements OnInit {
  private title: string = 'Welcome to Browser Push Notifications!';

  constructor(private _notificationService: NotificationsService) {
    this._notificationService.requestPermission();
  }

  ngOnInit() {
  }

  notify() {
    let data: Array < any >= [];
    data.push({
        'title': 'Approval',
        'alertContent': 'This is First Push Notification -- By Amandeep Madan'
    });
    data.push({
        'title': 'Request',
        'alertContent': 'This is Second Push Notification -- By Amandeep Madan'
    });
    data.push({
        'title': 'Leave Application',
        'alertContent': 'This is Third Push Notification -- By Amandeep Madan'
    });
    data.push({
        'title': 'Approval',
        'alertContent': 'This is Fourth Push Notification -- By Amandeep Madan'
    });
    data.push({
        'title': 'To Do Task',
        'alertContent': 'This is Fifth Push Notification -- By Amandeep Madan'
    });
    this._notificationService.generateNotification(data);
  }

}
