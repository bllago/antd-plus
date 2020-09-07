import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button, Typography, Tooltip, Popconfirm } from 'antd'
import { DeleteFilled } from '@ant-design/icons'

const DEFAULT_PROPS = {
  type: 'primary',
  question: 'Remove clinic',
  confirmLabel: 'Yes, remove it',
  cancelLabel: 'No, keep it',
  tooltipLabel: 'Remove clinic',
  tooltipPlacement: 'bottom'
}

const ClinicRemove = (props) => {
  const {
    label,
    type,
    shape,
    icon,
    iconLeft,
    iconRight,
    onSubmit,
    confirmLabel,
    onCancel,
    cancelLabel,
    tooltipProps,
    question,
    itemName
  } = props

  const iconNode = typeof icon === 'boolean' ? <DeleteFilled /> : icon
  const iconNodeLeft =
    typeof iconLeft === 'boolean' ? <DeleteFilled /> : iconLeft
  const iconNodeRight =
    typeof iconRight === 'boolean' ? <DeleteFilled /> : iconRight

  return (
    <Popconfirm
      title={
        <Fragment>
          <Typography.Text>
            {question || DEFAULT_PROPS.question}
          </Typography.Text>
          {itemName && <Typography.Text strong> {itemName}</Typography.Text>}
          <Typography.Text>?</Typography.Text>
        </Fragment>
      }
      onConfirm={onSubmit}
      onCancel={onCancel}
      okButtonProps={{ danger: true }}
      okText={
        confirmLabel && itemName
          ? `Yes, remove ${itemName}`
          : DEFAULT_PROPS.confirmLabel
      }
      cancelText={
        cancelLabel && itemName
          ? `No, keep ${itemName}`
          : DEFAULT_PROPS.cancelLabel
      }
    >
      {!label && shape && (iconNode || iconNodeLeft || iconNodeRight) ? (
        <Tooltip
          {...tooltipProps}
          placement={tooltipProps.placement || DEFAULT_PROPS.tooltipPlacement}
        >
          <Button
            {...props}
            type={type || DEFAULT_PROPS.type}
            icon={iconNode || iconNodeLeft || iconNodeRight}
            danger
          />
        </Tooltip>
      ) : (
        <Button
          {...props}
          type={type || DEFAULT_PROPS.type}
          icon={iconNode || iconNodeLeft}
          danger
        >
          {label}
          {iconNodeRight}
        </Button>
      )}
    </Popconfirm>
  )
}

ClinicRemove.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  // icon: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func,
  cancelLabel: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  question: PropTypes.string,
  itemName: PropTypes.string
}

export default ClinicRemove
