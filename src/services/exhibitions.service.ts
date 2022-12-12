import Axios from 'axios-observable';
import {Observable} from "rxjs";

const API_URL = `https://api.artic.edu/api/v1/`;

export class ExhibitionService {

    /**
     * Returns all exhibitions
     */
    public getExhibitions(limit: number, page: number): Observable<any> {
        let url = `${API_URL}exhibitions?limit=${limit}&page=${page}&fields=id,title,is_featured,gallery_title,short_description,description,type,status`;
        return new Observable<any>(observer => {
            Axios.get<any>(url)
                .pipe()
                .subscribe(
                    (response) => {
                        observer.next(response.data);
                        observer.complete();
                    },
                    error => {
                        observer.error(error);
                        observer.complete();
                    }
                );
        })
    }

    /**
     * Returns serch result for exhibitions
     */
    public searchExhibitions(query: string, limit: number, page: number | null): Observable<any> {
        let url = `${API_URL}exhibitions/search?q=${query}&limit=${limit}&page=${page}&fields=id,title,is_featured,gallery_title,description,short_description,type,status`;
        return new Observable<any>(observer => {
            Axios.get<any>(url)
                .pipe()
                .subscribe(
                    (response) => {
                        observer.next(response.data);
                        observer.complete();
                    },
                    error => {
                        observer.error(error);
                        observer.complete();
                    }
                );
        })
    }
}

export const exhibitionService = new ExhibitionService();
