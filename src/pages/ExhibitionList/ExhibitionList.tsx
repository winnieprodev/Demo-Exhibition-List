import { useEffect, useState } from "react";
import { Content, Header, Searchbar, Exhibitions, Pagination, Spinner } from "components";
import { exhibitionService } from "../../services/exhibitions.service";
import { ExhibitionData, ExhibitionPagination } from "models";
import { handleCompare } from "helpers/handle-compare";

const limitOptions = [10, 30, 100];

export enum SortingSource {
  None,
  Title = "title",
  Description = "description",
  IsFeatured = "is_featured",
  GalleryTitle = "gallery_title",
  Type = "type",
}

export enum SortingDirection {
  Asc = "asc",
  Desc = "desc"
}

export interface SortingObject {
  title: string;
  source: string;
  direction: string;
}

interface ExhibitionListState  {
  isLoading: boolean;
  exhibitions: ExhibitionData[],
  searchValue: string;
  limit: number;
  exhibitionPagination: ExhibitionPagination | null,
  activeSource: string;
  sortingColumns: SortingObject[];
}

const ExhibitionList: React.FC = () => {

  const [state, setState] = useState({
    isLoading: true,
    exhibitions: [],
    searchValue: '',
    limit: limitOptions[1],
    exhibitionPagination: null,
    sortingColumns: [
      {
          title: 'Title',
          source: SortingSource.Title,
          direction: SortingDirection.Desc,
      },
      {
          title: 'Description',
          source: SortingSource.Description,
          direction: SortingDirection.Desc,
      },
      {
          title: 'Is Featured',
          source: SortingSource.IsFeatured,
          direction: SortingDirection.Desc,
      },
      {
          title: 'Gallery Title',
          source: SortingSource.GalleryTitle,
          direction: SortingDirection.Desc,
      },
      {
          title: 'Type of Exhibition',
          source: SortingSource.Type,
          direction: SortingDirection.Desc,
      }
    ],
    activeSource: SortingSource.None,
  } as ExhibitionListState)

  const handleSearch = (page = 1) => {
    setState({ ...state, isLoading: true })
    const cb = () => setState({ ...state, isLoading: false })
    if (page > 33) {
      exhibitionService.getExhibitions(state.limit, page).subscribe(response => {
        const { pagination, data } = response;
        setState({
          ...state,
          isLoading: false,
          exhibitions: data,
          exhibitionPagination: pagination
        })
      }, () => cb);
    } else {
      exhibitionService.searchExhibitions(state.searchValue, state.limit, page).subscribe(response => {
        const { pagination, data } = response;
        setState({
          ...state,
          isLoading: false,
          exhibitions: data,
          exhibitionPagination: pagination
        })
      }, () => cb);
    }
  }

  const onSelectedPage = (index: number) => {
    handleSearch(index);
  }

  const onChangeSearchVal = (newValue: string) => {
    setState({ ...state, searchValue: newValue });
  }

  const setDirection = (active: string, direction: SortingDirection) => {
      const itemIndex = state.sortingColumns.findIndex(item => item.source === active);
      state.sortingColumns[itemIndex].direction = direction;
      setState(state => ({
          ...state,
          sortingColumns: state.sortingColumns
      }));
  }

  const handleSorting = (field: string) => {
    const sortingColumn = state.sortingColumns.find(item => item.source === field)
      if (sortingColumn) {
        const direction = sortingColumn.direction === SortingDirection.Asc
              ? SortingDirection.Desc
              : SortingDirection.Asc;

          setDirection(field, direction);

          setState(state => ({
              ...state,
              activeSource: field,
              exhibitions: state.exhibitions.sort((e1, e2) => handleCompare(e1, e2, field, direction))
          }));
      }
  }

  useEffect(() => {
    const cb = () => setState({ ...state, isLoading: false })
    exhibitionService.searchExhibitions(state.searchValue, state.limit, 1).subscribe(response => {
      const { pagination, data } = response;
      setState({
        ...state,
        isLoading: false,
        exhibitions: data,
        exhibitionPagination: pagination
      })
    }, () => cb);
  }, []);
  
  return (
    <>
      <Header>
        <Searchbar value={state.searchValue} onChange={onChangeSearchVal} onSearch={handleSearch} disabled={state.isLoading} />
      </Header>
      <Content>
        {state.isLoading ? <Spinner /> : (
          <Exhibitions handleSort={handleSorting} exhibitions={state.exhibitions} sortingColumns={state.sortingColumns} />
        )}
        
        {!state.isLoading && state.exhibitionPagination && <Pagination paginationData={state.exhibitionPagination} selectPage={onSelectedPage} />}
        
      </Content>
    </>
  );
};

export default ExhibitionList;
