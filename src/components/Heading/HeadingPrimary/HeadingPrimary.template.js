import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../Box'
import { Typography } from 'antd'
import { DEFAULT_PROPS } from './constants'

const HeadingPrimary = (props) => {
  const {
    title,
    subTitle,
    // marginBottom,
    titleMarginBottom,
    textAlign,
    titleSize
  } = props

  return (
    <Box textAlign={textAlign || DEFAULT_PROPS.textAlign}>
      <Box
        mb={subTitle && (titleMarginBottom || DEFAULT_PROPS.titleMarginBottom)}
      >
        <Typography.Title level={titleSize}>{title}</Typography.Title>
      </Box>
      {subTitle && <Typography.Text>{subTitle}</Typography.Text>}
    </Box>
  )
}

HeadingPrimary.propTypes = {
  title: PropTypes.string.isRequired,
  titleSize: PropTypes.number,
  titleMarginBottom: PropTypes.number,
  subTitle: PropTypes.string,
  textAlign: PropTypes.string
  // marginBottom: PropTypes.number
}

export default HeadingPrimary
