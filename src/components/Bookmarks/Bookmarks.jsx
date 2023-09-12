
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
   <div className="md:w-1/3 bg-[#1111110D] my-10 rounded-xl">
     <div className='mb-4 bg-[#6047EC1A] text-[#6047EC] border-[#6047EC] px-12 py-5'>
            <h3 className="text-2xl text-center">Reading time: {readingTime} minutes</h3>
        </div>
     <div >
       
     <div className='mt-4'>
         <h2 className='text-center font-bold text-2xl'>Bookmarks Blogs :{bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => {
            return <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        })
      }
     </div>
    </div>
   </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
