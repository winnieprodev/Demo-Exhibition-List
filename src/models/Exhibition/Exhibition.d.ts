export interface ExhibitionPagination {
  total: number,
  limit: number,
  offset: number,  // 0-based
  current_page: number, // 1-based
  total_pages: number,
  prev_url?: string,
  next_url?: string
}

export interface ExhibitionData {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  is_featured: boolean;
  description?: string | null;
  short_description: string | null;
  web_url: string;
  image_url: string | null;
  type?: string;
  status: string;
  aic_start_at: Data;
  aic_end_at: Data;
  date_display?: string;
  department_display?: string;
  gallery_id: number;
  gallery_title: string;
  artwork_ids: number[];
  artwork_titles: string[];
  artist_ids: number[];
  site_ids: number[];
  image_id: string | null;
  alt_image_ids: string[];
  document_ids: any[];
  suggest_autocomplete_boosted?: any
  suggest_autocomplete_all?: any;
  last_updated_source?: Data;
  last_updated?: Data;
  timestamp: Data;
}

export interface Exhibition {
  pagenation: ExhibitionPagination;
  data: ExhibitionData
}
