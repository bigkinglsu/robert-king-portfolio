import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills-page',
  imports: [RouterLink],
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPage {}
