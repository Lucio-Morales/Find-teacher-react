export interface PageNavigationItemDto {
  title: string;
  key: string;
  path: string;
  index?: boolean;
  basePageUrl?: string;
}

export interface PageNavigationItemProps {
  data: PageNavigationItemDto;
  currentSection: string | undefined;
}

export interface PageNavigationProps {
  items: PageNavigationItemDto[];
}
