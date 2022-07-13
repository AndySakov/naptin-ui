import React from 'react'
import PageBuilder from '../components/layout/PageBuilder'
import SearchBar from '../components/SearchBar'

const EmptyPage = () => {
  return (
    <PageBuilder
      name="Empty Page"
      extras={
        <div className="flex flex-row w-full h-full py-4">
          <SearchBar placeholder="Search by name, email or phone..." />
          <button type="submit" className="btn btn-secondary mx-0">
            Click Me!
          </button>
        </div>
      }
    ></PageBuilder>
  );
}

export default EmptyPage