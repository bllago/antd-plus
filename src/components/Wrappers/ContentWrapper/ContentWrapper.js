import React from 'react'
import PropTypes from 'prop-types'
import Row from '../../LayoutSystem/Row'
import Col from '../../LayoutSystem/Col'
import HeadingPrimary from '../../Heading/HeadingPrimary'
import Back from '../../Actions/Back'

const ContentWrapper = (props) => {
  const {
    firstLevelHidden,
    headingProps,
    children,
    action,
    onBack,
    backBtnProps,
    divided
  } = props

  const DEFAULT_PROPS = {
    marginBottom: 48
  }

  return (
    <Row>
      {!firstLevelHidden && (
        <Col
          xs={24}
          mb={headingProps.marginBottom || DEFAULT_PROPS.marginBottom}
        >
          <Row alignItems={!headingProps.subTitle ? 'center' : 'flex-start'}>
            <Col
              display='flex'
              flex='1 1 auto'
              alignItems={!headingProps.subTitle ? 'center' : 'flex-start'}
              justifyContent={onBack || action ? 'flex-start' : 'center'}
            >
              {onBack && (
                <Back
                  onClick={onBack}
                  {...backBtnProps}
                  divided={divided !== undefined ? divided : true}
                />
              )}
              <HeadingPrimary {...headingProps} />
            </Col>
            {action && <Col>{action}</Col>}
          </Row>
        </Col>
      )}
      <Col xs={24}>{children}</Col>
    </Row>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  firstLevelHidden: PropTypes.bool,
  headingProps: PropTypes.object.isRequired,
  action: PropTypes.node,
  onBack: PropTypes.func,
  backBtnProps: PropTypes.object,
  divided: PropTypes.bool
}

export default ContentWrapper
