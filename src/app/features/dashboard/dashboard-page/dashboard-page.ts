import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { Agenda } from '../agenda/agenda';
import { WeatherCard } from '../weather-card/weather-card';
import { Message } from '../message/message';
import { News } from '../news/news';
import { Birthday } from '../birthday/birthday';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    TodoList,
    Agenda,
    WeatherCard,
    Message,
    News,
    Birthday
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

}
