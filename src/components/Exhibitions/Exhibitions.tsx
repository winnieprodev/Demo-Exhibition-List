import React from "react";
import * as Styled from "./exhibitions.styled";
import { ExhibitionItem } from "./ExhibitionItem";
import { ExhibitionData } from "models";
import { SmallExhibitionItem } from "./SmallExhibitionItem";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import {
    faSortDown,
    faSortUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SortingDirection, SortingObject, SortingSource } from "pages/ExhibitionList/ExhibitionList";

iconLibrary.add(faSortDown);
iconLibrary.add(faSortUp);

interface OwnProps {
  exhibitions: ExhibitionData[];
  sortingColumns: SortingObject[];
  handleSort: (sortObject: string) => void;
}

const Exhibitions = ({ handleSort, exhibitions, sortingColumns }: React.PropsWithChildren<OwnProps>) => {
  const renderSmallContent = () => {
    return (
      <Styled.SmallWrapper>
        {
          exhibitions.map(item => (
            <Exhibitions.SmallItem data={item} key={item.id}/>
          ))
        }
      </Styled.SmallWrapper>
    )
  }

  const titleSorting = sortingColumns.find(x => x.source === SortingSource.Title);
  const descriptionSorting = sortingColumns.find(x => x.source === SortingSource.Description);
  const isFeaturedSorting = sortingColumns.find(x => x.source === SortingSource.IsFeatured);
  const galleryTitleSorting = sortingColumns.find(x => x.source === SortingSource.GalleryTitle);
  const exhibitionTypeSorting = sortingColumns.find(x => x.source === SortingSource.Type);

  return (
    <React.Fragment>
      <Styled.Wrapper>
        <Styled.Table>
          <thead>
            <tr>
              <th className="text-center" style={{ width: '20%' }} onClick={() => handleSort("title")}>
                <Styled.TableSortLabel>
                  Title
                  <Styled.Icon>
                    {titleSorting?.direction === SortingDirection.Asc ? <FontAwesomeIcon icon="sort-down" /> : <FontAwesomeIcon icon="sort-up" />}
                  </Styled.Icon>
                </Styled.TableSortLabel>
              </th>
              <th className="text-center" style={{ width: '30%' }} onClick={() => handleSort("description")}>
                <Styled.TableSortLabel>
                  Description
                  <Styled.Icon>
                    {descriptionSorting?.direction === SortingDirection.Asc ? <FontAwesomeIcon icon="sort-down" /> : <FontAwesomeIcon icon="sort-up" />}
                  </Styled.Icon>
                </Styled.TableSortLabel>
              </th>
              <th className="text-center" style={{ width: '10%' }} onClick={() => handleSort("is_featured")}>
                <Styled.TableSortLabel>
                  Is Featured
                  <Styled.Icon>
                    {isFeaturedSorting?.direction === SortingDirection.Asc ? <FontAwesomeIcon icon="sort-down" /> : <FontAwesomeIcon icon="sort-up" />}
                  </Styled.Icon>
                </Styled.TableSortLabel>
              </th>
              <th className="text-center" style={{ width: '20%' }} onClick={() => handleSort("gallery_title")}>
                <Styled.TableSortLabel>
                  Gallery Title
                  <Styled.Icon>
                    {galleryTitleSorting?.direction === SortingDirection.Asc ? <FontAwesomeIcon icon="sort-down" /> : <FontAwesomeIcon icon="sort-up" />}
                  </Styled.Icon>
                </Styled.TableSortLabel>
              </th>
              <th className="text-center" style={{ width: '20%' }} onClick={() => handleSort("type")}>
                <Styled.TableSortLabel>
                  Type of Exhibition
                  <Styled.Icon>
                    {exhibitionTypeSorting?.direction === SortingDirection.Asc ? <FontAwesomeIcon icon="sort-down" /> : <FontAwesomeIcon icon="sort-up" />}
                  </Styled.Icon>
                </Styled.TableSortLabel>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              exhibitions.map(item => (
                <Exhibitions.ExhibitionItem info={item} key={item.id}/>
              ))
            }
          </tbody>
        </Styled.Table>
        {renderSmallContent()}
      </Styled.Wrapper>
    </React.Fragment>
  )
};

Exhibitions.ExhibitionItem = ExhibitionItem;
Exhibitions.SmallItem = SmallExhibitionItem;

export default Exhibitions;
