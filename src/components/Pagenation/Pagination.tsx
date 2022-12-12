import React, { Fragment } from "react";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { 
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faLongArrowAltLeft,
    faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./pagination.styled";
import { ExhibitionPagination } from "models";

iconLibrary.add(faAngleDoubleLeft);
iconLibrary.add(faAngleDoubleRight);
iconLibrary.add(faLongArrowAltLeft);
iconLibrary.add(faLongArrowAltRight);

interface PProps {
  paginationData: ExhibitionPagination
  selectPage: (pageNumber: number) => void;
}

const Pagination: React.FC<PProps> = ({
  paginationData,
  selectPage,
}) => {
  if (typeof paginationData.total_pages !== "number") {
    return <Styled.Container>Loading...</Styled.Container>;
  }
  const pageCount = paginationData.total_pages;
  const currentPage = paginationData.current_page;
  const pageArray = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= pageCount);

  return (
    <Styled.Container>
      {pageCount > 0 && (
        <>
        <Styled.PageContainer>
          <Styled.PaginationPrevIconButton disabled={currentPage === 1} onClick={() => selectPage(Math.max(currentPage - 1, 1))}>
            <FontAwesomeIcon icon="angle-double-left" />
          </Styled.PaginationPrevIconButton>
          {!pageArray.includes(1) && (
            <Fragment>
              <Styled.PaginationButton
                isActive={currentPage === 1}
                onClick={() => currentPage !== 1 && selectPage(1)}
              >
                1
              </Styled.PaginationButton>
              <Styled.PaginationButton>
                ...
              </Styled.PaginationButton>
            </Fragment>
          )}
          {pageArray.map((page, index) => {
            return (
              <Styled.PaginationButton
                key={`pagination_${index}`}
                isActive={page === currentPage}
                onClick={() => page !== currentPage && selectPage(page)}
              >
                {page}
              </Styled.PaginationButton>
            );
          })}
          {!pageArray.includes(pageCount) && (
            <Fragment>
              <Styled.PaginationButton >
                ...
              </Styled.PaginationButton>
              <Styled.PaginationButton
                isActive={currentPage === pageCount}
                onClick={() => currentPage !== pageCount && selectPage(pageCount)}
              >
                {pageCount}
              </Styled.PaginationButton>
            </Fragment>
          )}
          <Styled.PaginationNextIconButton disabled={currentPage === pageCount} onClick={() => selectPage(Math.min(currentPage + 1, pageCount))}>
            <FontAwesomeIcon icon="angle-double-right" />
          </Styled.PaginationNextIconButton>
        </Styled.PageContainer>
        <Styled.Wrapper>
          <Styled.FirstLastButton onClick={() => selectPage(1)} disabled={currentPage === 1}>
            <FontAwesomeIcon icon="long-arrow-alt-left" />
            Older
          </Styled.FirstLastButton>
            
          <Styled.FirstLastButton onClick={() => selectPage(pageCount)} disabled={currentPage === pageCount}>
            Newer
            <FontAwesomeIcon icon="long-arrow-alt-right" />
          </Styled.FirstLastButton>
        </Styled.Wrapper>
        </>
      )}
    </Styled.Container>
  );
};

export default Pagination;
