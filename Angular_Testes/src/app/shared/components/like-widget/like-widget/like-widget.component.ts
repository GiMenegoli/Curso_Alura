import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id: string = null;

  public fonts = {
    faThumbsUp,
  };

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.genereteUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
