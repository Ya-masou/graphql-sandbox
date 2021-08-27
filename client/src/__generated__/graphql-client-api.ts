import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type InputTrackContent = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  numberOfViews?: Maybe<Scalars['Int']>;
};

export type MutateTrackResponse = {
  __typename?: 'MutateTrackResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create track content */
  createTrack: MutateTrackResponse;
  /** Update track content */
  updateTrack: MutateTrackResponse;
};


export type MutationCreateTrackArgs = {
  content: InputTrackContent;
};


export type MutationUpdateTrackArgs = {
  id: Scalars['ID'];
  content: InputTrackContent;
};

export type Query = {
  __typename?: 'Query';
  /** Query to get tracks array for the homepage grid */
  tracks: Array<Track>;
  /** Fetch a specific track, provided a track's ID */
  track: Track;
  authors: Array<Author>;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  title: Scalars['String'];
  numberOfViews?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateTrackMutationVariables = Exact<{
  content: InputTrackContent;
}>;


export type CreateTrackMutation = { __typename?: 'Mutation', createTrack: { __typename?: 'MutateTrackResponse', code: number, success: boolean, message: string, track?: Maybe<{ __typename?: 'Track', id: string, title: string, numberOfViews?: Maybe<number>, description?: Maybe<string> }> } };

export type UpdateTrackMutationVariables = Exact<{
  updateTrackId: Scalars['ID'];
  InputTrackContent: InputTrackContent;
}>;


export type UpdateTrackMutation = { __typename?: 'Mutation', updateTrack: { __typename?: 'MutateTrackResponse', code: number, success: boolean, message: string, track?: Maybe<{ __typename?: 'Track', title: string, id: string, description?: Maybe<string>, numberOfViews?: Maybe<number> }> } };

export type AuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', id: string, name: string }> };

export type TrackQueryVariables = Exact<{
  trackId: Scalars['ID'];
}>;


export type TrackQuery = { __typename?: 'Query', track: { __typename?: 'Track', id: string, title: string, description?: Maybe<string>, numberOfViews?: Maybe<number> } };

export type TracksQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', description?: Maybe<string>, numberOfViews?: Maybe<number>, id: string, title: string }> };

export type TrackBasicContentFragment = { __typename?: 'Track', id: string, title: string };

export type TracksBasicInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type TracksBasicInfoQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', id: string, title: string }> };

export const TrackBasicContentFragmentDoc = gql`
    fragment TrackBasicContent on Track {
  id
  title
}
    `;
export const CreateTrackDocument = gql`
    mutation createTrack($content: InputTrackContent!) {
  createTrack(content: $content) {
    code
    success
    message
    track {
      id
      title
      numberOfViews
      description
    }
  }
}
    `;

export function useCreateTrackMutation() {
  return Urql.useMutation<CreateTrackMutation, CreateTrackMutationVariables>(CreateTrackDocument);
};
export const UpdateTrackDocument = gql`
    mutation updateTrack($updateTrackId: ID!, $InputTrackContent: InputTrackContent!) {
  updateTrack(id: $updateTrackId, content: $InputTrackContent) {
    code
    success
    message
    track {
      title
      id
      description
      numberOfViews
    }
  }
}
    `;

export function useUpdateTrackMutation() {
  return Urql.useMutation<UpdateTrackMutation, UpdateTrackMutationVariables>(UpdateTrackDocument);
};
export const AuthorsDocument = gql`
    query authors {
  authors {
    id
    name
  }
}
    `;

export function useAuthorsQuery(options: Omit<Urql.UseQueryArgs<AuthorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AuthorsQuery>({ query: AuthorsDocument, ...options });
};
export const TrackDocument = gql`
    query track($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    description
    numberOfViews
  }
}
    `;

export function useTrackQuery(options: Omit<Urql.UseQueryArgs<TrackQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TrackQuery>({ query: TrackDocument, ...options });
};
export const TracksDocument = gql`
    query tracks {
  tracks {
    ...TrackBasicContent
    description
    numberOfViews
  }
}
    ${TrackBasicContentFragmentDoc}`;

export function useTracksQuery(options: Omit<Urql.UseQueryArgs<TracksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TracksQuery>({ query: TracksDocument, ...options });
};
export const TracksBasicInfoDocument = gql`
    query tracksBasicInfo {
  tracks {
    ...TrackBasicContent
  }
}
    ${TrackBasicContentFragmentDoc}`;

export function useTracksBasicInfoQuery(options: Omit<Urql.UseQueryArgs<TracksBasicInfoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TracksBasicInfoQuery>({ query: TracksBasicInfoDocument, ...options });
};