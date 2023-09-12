import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.concatTitle(routerState.root, 'Cap 1', ': ');
    if (title) {
      this.title.setTitle(title);
    }
  }

  private concatTitle(
    route: ActivatedRouteSnapshot,
    title: string,
    separator: string
  ): string {
    if (!route) return title;

    const sub = route.data ? this.getResolvedTitleForRoute(route) : undefined;
    if (sub) {
      title = `${title}${separator}${sub}`;
    }

    title = this.concatTitle(route.children[0], title, separator);

    return title;
  }
}
