import { RESTDataSource } from "apollo-datasource-rest";
import { IntrospectionOutputType } from "graphql";
import { InputTrackContent } from "../__generated__/graphql-resolver-types";

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/";
  }

  getTracks() {
    return this.get("tracks");
  }

  getAuthors() {
    return this.get(`authors`);
  }

  getTrack(trackId: string) {
    return this.get(`tracks/${trackId}`);
  }

  updateTrack(trackId: string, content: InputTrackContent) {
    return this.patch(`tracks/${trackId}`, content);
  }

  createTrack(content: InputTrackContent) {
    return this.post("tracks", content);
  }
}

export default TrackAPI;
