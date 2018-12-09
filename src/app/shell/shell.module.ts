import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell/shell.component';
import { ToolbarModule, ButtonModule, SplitButtonModule, MenubarModule, MenuModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { DataSharingService } from '../services/data-sharing.service';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    MenuModule,
    ToastModule,
    DropdownModule,
    SidebarModule
  ],
  declarations: [ShellComponent],
  providers: [MessageService, DataSharingService]
})

export class ShellModule { }
